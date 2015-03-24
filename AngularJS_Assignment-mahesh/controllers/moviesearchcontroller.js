angular.module("moviesearch").
    controller('moviesearchcontroller', function ($scope, $http, MovieService) {
    $scope.search = 'query';
    MovieService.fetchResults = function (output) {
        output.forEach(function (it) {
            var symbol = {
                title: it,
                poster: "",
                cast: ""
            };
        });
    }
});
