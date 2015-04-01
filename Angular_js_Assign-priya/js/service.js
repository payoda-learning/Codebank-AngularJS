angular.module("movies")
.service("moviesService", function($http, $q){
	
	this.getmovieDetails = function(movieName){
		var user;
		var promise;
		var deferred = $q.defer();
		var url = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=edpyxhran22urr7g7m7pdek8&q="+movieName+"&callback=JSON_CALLBACK";
	    promise = $http.jsonp(url)
		.success(function(output){
			console.log(output);
			user = output.movies;
			return deferred.promise;
			});
			setTimeout(function(){ console.log(user);
				return user;
				}, 3000);
			return deferred.promise;
		};
});
