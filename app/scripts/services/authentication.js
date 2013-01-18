'use strict';

angular.module('services.authentication.interceptor', []).

config(function($httpProvider) {
    $httpProvider.responseInterceptors.push('AuthenticationInterceptor');
}).

factory('AuthenticationInterceptor', function($rootScope, $injector) {

    var $http, success, error;

    return function(promise) {

        $http = $http || $injector.get('$http');

        success = function(response) {
            return response;
        };

        error = function(response) {

            switch(response.status) {

                case 400:
                    $rootScope.$broadcast('event:auth:bad-request');
                    break;
                case 401:
                    $rootScope.$broadcast('event:auth:not-authorised');
                    break;
                case 403:
                    $rootScope.$broadcast('event:auth:forbidden');
                    break;
            }

            return promise;
        };

        return promise.then(success, error);
    };
});


angular.module('services.authentication', ['ngResource', 'services.xdomain', 'services.token', 'services.token', 'services.authentication.interceptor']).

factory('Authentication', function ($rootScope, $resource, Token, Cookies) {

    var authenticationService = $resource('http://some.service.com', {}, { authenticate: { method: 'POST' } } ),

        authenticate = function(email, password, callback) {

        return authenticationService.authenticate({ email: email, password: password }, callback);
    };

    return {
        login: function(username, password) {
            authenticate(username, password, function(response) {
                Token.add(response.AuthenticatedUser.Sso);
                $rootScope.$broadcast('event:auth:success');
            })
        },

        logout: function() {
            Cookies.removeAll();
        }
    };
});