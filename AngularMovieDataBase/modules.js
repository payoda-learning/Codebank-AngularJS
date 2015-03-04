angular.module("MovieDatabase",["ngRoute"]).
config(['$routeProvider', '$locationProvider',function($routeProvider,$locationProvider){
	$routeProvider
	.when("/movieList",{
		templateUrl : "views/movieList.html"
	})
	.otherwise({
		templateUrl : "views/movieList.html",
		reloadOnSearch: false
	});
	$locationProvider.html5Mode({
 		 enabled: true,
 		 requireBase: false
	});
}]);