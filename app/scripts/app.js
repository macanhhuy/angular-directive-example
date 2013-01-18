'use strict';

var TESTAPP = TESTAPP || {};

TESTAPP.app = angular.module('testApp', ['services.authentication', 'directive.signin'])
    .config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/signin', { templateUrl: 'views/signin.html', controller: 'AuthenticationCtrl' });

    $routeProvider.otherwise({ redirectTo: '/signin' });
}]);