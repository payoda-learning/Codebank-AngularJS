angular.module("movie")
.service("MovieService",function($http){
	this.loadMovies = function(callback, movieName){
		url = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=edpyxhran22urr7g7m7pdek8&q=" + movieName+ "&callback=JSON_CALLBACK";
		$http.jsonp(url)
		.success(function(output){
       		callback(output);
		});
	}
	this.setMoviesSearchHistory = function(movieName){
		if(typeof movieName !== 'undefined'){
			history.pushState({"movieName":movieName}, movieName, '?movieName='+movieName);
			event.preventDefault();
	    	var moviesHistory =  (this.getMoviesSearchHistory() !== null)?this.getMoviesSearchHistory() : [];
	   		var movie = {"name":movieName};
	  		moviesHistory.push(movie);
	   		localStorage.moviesHistory =JSON.stringify(moviesHistory);
   		}
	}
	this.getMoviesSearchHistory = function(){
		if (localStorage.moviesHistory) {
			return JSON.parse(localStorage.moviesHistory)
		}
		return null;
	}
});