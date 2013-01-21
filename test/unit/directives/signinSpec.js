describe('Directive', function () {

    describe('directive.signin', function() {

        var element, compiledEl, scope, rootScope;

        beforeEach(module('directive.signin'));
        beforeEach(module('views/directive/signin.html'));

        beforeEach(inject(function($rootScope, $compile) {

            element    = angular.element('<sign-in />');
            rootScope  = $rootScope;
            compiledEl = $compile(element)(rootScope);
            scope      = compiledEl.scope();

            rootScope.$digest();
        }));

        it('should show the signin if a bad request is broadcast', function() {

            rootScope.$broadcast('event:auth:bad-request');

            expect(scope.show).toBeTruthy();
        });

    });
});