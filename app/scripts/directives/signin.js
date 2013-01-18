'use strict';

angular.module('directive.signin', ['services.authentication']).

    directive('signIn', function (Authentication) {

        return {
            restrict: 'E',
            templateUrl: 'views/directive/signin.html', // using this method causes the tests to fail
//            template: '<section class="sign-in" ng-show="show==true"><form class="well form-inline"><input type="email" placeholder="Username" ng-model="username" required /><input type="password" placeholder="Password" ng-model="password" required /><button ng-click="signin()">Signin</button></form><button ng-click="signout()">Signout</button></section>', // using this method causes the tests to pass
            replace: true,
            scope: true,
            link: function (scope, element, attrs) {

                scope.$on('event:auth:bad-request', function (event) {
                    scope.show = true;
                });

                scope.$on('event:auth:not-authorised', function (event) {
                    scope.show = true;
                });

                scope.$on('event:auth:success', function (event) {
                    scope.show = false;
                });

                scope.signin = function() {
                    if(scope.username && scope.password) {
                        Authentication.login(scope.username, scope.password);
                    }
                };
            }
        }
    });
