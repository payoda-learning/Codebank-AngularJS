angular.module("MovieDatabase")
.service("MovieListService",function($http){
	this.loadMovieList = function(movie,callback){
		var url = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=edpyxhran22urr7g7m7pdek8&q="+movie+"&callback=JSON_CALLBACK";		
	    $http.jsonp(url)
	        .success(function(data){
	            callback(data.movies);
	        });
   }

   this.setSearchHistory = function(movieName){
   		if(movieName != undefined){
	    	var recentItems =  (this.getSearchHistory() == null)?[]:this.getSearchHistory();
	   		var movie = {"name":movieName};
	  		recentItems.push(movie);
	   		localStorage.setItem("searchedMovies", JSON.stringify(recentItems));
   		}
   }

    this.getSearchHistory = function(){
    	var movieList = localStorage.getItem("searchedMovies");
		return JSON.parse(movieList);
	}

});