angular.module("Movie")
.service("MovieService",function($http){
    
    this.getSearchedMovie = function(searchWord,callback){
         console.log("inside service");
    this.url = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?callback=JSON_CALLBACK&apikey=edpyxhran22urr7g7m7pdek8&q="+searchWord;
    
  $http.jsonp(this.url).
  success(function(output) {
      
   
       console.log("inside success service");
      
      callback(output);
   
  }).
  error(function (data) {
   
          console.log("inside failed service");
  });
}
});