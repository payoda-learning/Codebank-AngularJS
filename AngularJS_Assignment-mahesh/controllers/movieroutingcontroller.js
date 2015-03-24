angular.module("moviesearch")
.controller("moviesearchcontroller", function ($scope, $location) {
    $scope.show = function () {
        //$scope.person = person;
        $location.url("/list");
    }
   
});