angular.module("movies")
.controller("moviesController", function($scope, $http, $q){
	var sum;
	$scope.movieInfo = [];
	$scope.previousSearch = [];
	// Loads the selected movie details on click
	$scope.searchMovie = function(movieName){
		$scope.total = 0;
		$scope.movieInfo = [];
		var url = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=edpyxhran22urr7g7m7pdek8&q="+movieName+"&callback=JSON_CALLBACK";
		var promise = $http.jsonp(url)
		.success(function(output){
			var deferred = $q.defer();
			angular.forEach(output.movies, function(item){
				if(item.title === movieName){
				$scope.movieInfo.push(item);
				$scope.total++;
				return deferred.promise;
			}
				});
				
			}); 
			promise.then(function(){     
			localStorage.setItem("movieInfo", JSON.stringify($scope.movieInfo));
			});
			
	};
	//initially loads the previous search details from localstorage
	$scope.loadData = function(){
		$scope.previousSearch = localStorage.getItem('movieInfo');
		$scope.previousSearch = JSON.parse(localStorage.getItem('movieInfo'));
		}		
});
