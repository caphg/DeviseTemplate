var app = angular.module('angApp', ['ngResource']);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.patch = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    $httpProvider.defaults.headers.post = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    $httpProvider.defaults.headers.delete = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
}]);


app.controller('AngController', ['$scope', '$http',  function($scope, $http) {

}]);