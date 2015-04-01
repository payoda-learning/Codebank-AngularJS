angular.module("Movie")
.controller("MovieController",function($scope,MovieService,$localStorage){  
    $scope.searchResult = false;
    $scope.zeroResult = false;
   
     $scope.$storage = $localStorage.$default({movieList : []});
    
        
   
				
    $scope.load = function() {
       // $scope.data = $scope.$storage.message;
        $scope.data = $scope.$storage.movieList;
        };
    
    $scope.reset = function() {
       $scope.$storage.movieList = [];
        };
    
    $scope.processData = function(output){
        
        console.log($scope.count);
        var movie = {
					name : $scope.movieName
				};
        $scope.$storage.movieList.push(movie);
        
        if( $scope.count >= 0){
        $scope.searchResult = true;
        $scope.zeroResult = false;
        }
        if( $scope.count == undefined){
        $scope.zeroResult = true;
        $scope.searchResult = false;
        }       
                
        $scope.count = output.total;
        $scope.title = output.movies[0].title;
        
        if($scope.title == undefined)
        {
            $scope.title = $scope.movieName;
        }
        
        $scope.poster = output.movies[0].posters.thumbnail;
        $scope.cast = output.movies[0].abridged_cast;
        $scope.time = output.movies[0].runtime;
        $scope.rating = output.movies[0].mpaa_rating;
        $scope.year = output.movies[0].year;
        $scope.load();
      };
    
    $scope.getMovie = function() {
         console.log("inside controller");
         MovieService.getSearchedMovie($scope.movieName,$scope.processData); 
         
 
  };
});