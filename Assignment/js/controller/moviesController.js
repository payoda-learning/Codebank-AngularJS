angular.module("movie").
controller("moviesController",function($scope, MovieService){
	$scope.moviesHistoryList=[];
	if (localStorage.moviesHistory) {
		$scope.moviesHistoryList=MovieService.getMoviesSearchHistory();
    } 
	$scope.getMovie = function(movieHistoryName){
		$scope.movieName = movieHistoryName;
		MovieService.loadMovies($scope.displayMovieList, movieHistoryName);
		MovieService.setMoviesSearchHistory(movieHistoryName);
	};
	$scope.displayMovieList = function(moviesList){
			$scope.moviesList= moviesList.movies;
		}
	$scope.removeHistory = function(){
    	if (localStorage.moviesHistory) {
    		localStorage.removeItem("moviesHistory");
    		$scope.moviesHistoryList=[];
    	}
    };
	window.addEventListener('popstate', function(event) {
	 	$scope.movieName = event.state.movieName;
	  	MovieService.loadMovies($scope.displayMovieList, event.state.movieName);
	});
});