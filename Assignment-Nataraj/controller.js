var module = angular.module('assignment',[]).
controller('assignmentController',function($scope,$rootScope){  	
  $scope.searchButton = function() {
  	$rootScope.$broadcast("info",$scope.searchValue);
  	localStorage.setItem("previousValue",$scope.searchValue);  	
};
$scope.previousValue = localStorage.getItem("previousValue")
}).controller("movieController",function($scope,$http,$rootScope,$window){		
	$scope.secondPage = true;
	$scope.$on("info",function(e,value){
	  $scope.searchValue = value;	  
      var url ='http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=edpyxhran22urr7g7m7pdek8&q='+$scope.searchValue+'&callback=JSON_CALLBACK';      
      $http.jsonp(url).
        success(function(data){  	    
  	      $scope.movieList =data.movies;  	  
  	      $scope.backButton = true;	
        }).
        error(function(data){
  	     console.log("error");
        });
    });	
    $scope.back =function() {
    	console.log("back");
    	//$window.history.back(-1);
    	$window.history.back();    
    }
});