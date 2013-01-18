'use strict';

TESTAPP.app.controller('AuthenticationCtrl', function ($scope, Authentication) {

    $scope.signin = function() {

        if($scope.username && $scope.password) {
            Authentication.login($scope.username, $scope.password);
        }
    };

    $scope.signout = function() {
        Authentication.logout();
    }
});