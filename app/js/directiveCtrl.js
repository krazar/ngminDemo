var DirectiveCtrl = function($scope, $http, userService) {

    $http.get('/').success(function(data){
        $scope.data = data;
        $scope.users = userService.users;
    });
};