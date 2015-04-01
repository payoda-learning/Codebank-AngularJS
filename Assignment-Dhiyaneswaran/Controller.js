angular.module("assignment",['ngStorage']).
controller("movieDetails",function($scope, $http, $q,$localStorage){
	var arr = [];
	$scope.getMovie = function(){
		console.log("hello");
		arr.push($scope.movieName);
		 $localStorage.test = arr;
		 $scope.searches = $localStorage.test;
		service().then(function(res){
			$scope.movies = res;
			$scope.searchResult = "Found "+ res.length + " matches for " + $scope.movieName;
			console.log("then"+res);
		});
	}
	
	$scope.init = function(){
		$scope.searches = $localStorage.test;
		arr = $localStorage.test;
		console.log("initialised");
	}
	var service = function(){

		var url = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=edpyxhran22urr7g7m7pdek8&q=" + $scope.movieName + "&callback=JSON_CALLBACK";
		console.log(url);
		var deferred = $q.defer();
		$http.jsonp(url).
		success(function(data, status, headers, config){
			console.log(data);
			deferred.resolve(data.movies);
		}).
		error(function(data, status, headers, config){
			console.log("error");
		});
		return deferred.promise;
	}
	

});