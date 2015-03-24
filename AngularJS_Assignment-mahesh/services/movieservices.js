angular.module("moviesearch")
.service("MovieService", function ($http) {
    this.search = 'query';
    this.fetchResults = function () {
        $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json', {
            params: {
                page_limit: '5',
                page: '1',
                q: $scope.search,
                apikey: 'edpyxhran22urr7g7m7pdek8',
                callback: 'JSON_CALLBACK'
            }
        })
        .success(function (data) {
            $scope.results = data.movies;
        });
    }
});




