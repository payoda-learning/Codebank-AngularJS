angular.module("MovieDatabase")
.controller("MovieList",function($scope,MovieListService,$route){
	
	$scope.init = function() {
        $scope.recentSearchs = MovieListService.getSearchHistory();
    };

	$scope.searchMovie = function(movie){

		var url = "?movie=" + movie;
		var sObj = { "movie": movie };

        history.pushState(sObj,movie,url);
        MovieListService.setSearchHistory(movie);
		$scope.recentSearchs = MovieListService.getSearchHistory();

	}

	$scope.displayMovieList = function(data){
			$scope.movies = data;
			$scope.showMovieList = true;
	}

	$scope.onSearch = function(){
			$scope.showMovieList = false;		
	}

	$scope.$on('$locationChangeSuccess', function(event,next, nextParams) {
		var lastRoute = $route.current;
	    $route.current = lastRoute;

	    var movie = next.substr(60,next.length);
	   	MovieListService.loadMovieList(movie, $scope.displayMovieList);

	});

})
