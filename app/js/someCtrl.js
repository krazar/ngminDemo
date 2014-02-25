/**
 * Created by pierremarot on 25/02/2014.
 */
var app = angular.module('',[]);

app.controller('someCtrl',function($scope,$http){
    $http.get('/').success(function(data){
        $scope.data = data;
        $scope.users = userService.users;
    });
});