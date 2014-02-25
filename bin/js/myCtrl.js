var MyCtrl = function ($scope, $http, userService) {
  $http.get('/').success(function (data) {
    $scope.data = data;
    $scope.users = userService.users;
  });
};
var app = angular.module('myModule', []);
app.controller('MyCtrl', MyCtrl);