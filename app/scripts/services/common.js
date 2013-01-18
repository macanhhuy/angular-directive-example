'use strict';

angular.module('services.cookies', ['ngCookies']).

    factory('Cookies', function ($cookies) {

        return {

            get: function(name) {
                return $cookies[name];
            },

            add: function(name, value) {
                $cookies[name] = value;
            },

            remove: function(name) {
                delete $cookies[name];
            },

            removeAll: function() {
                for (var cookie in $cookies) {
                    delete $cookies[cookie];
                }
            }
        };
    });

angular.module('services.token', ['services.cookies']).

    factory('Token', function (Cookies) {

        return {

            get: function() {
                return Cookies.get('sso');
            },

            add: function(value) {
                Cookies.add('sso', value);
            },

            remove: function() {
                Cookies.remove('sso');
            }
        };
    });

angular.module('services.xdomain', []).

    config(function($httpProvider) {
        $httpProvider.defaults.headers.common['Authorization'] = 'Basic xxx';
        $httpProvider.defaults.useXDomain = true;
    });

angular.module('services.tokenized', ['services.xdomain','services.token']).

    run(function($http, Token) {
        $http.defaults.headers.common['SSO-Token'] = Token.get();
    });