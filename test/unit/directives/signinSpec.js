describe('Directive', function () {

    describe('directive.signin', function() {

        beforeEach(module('app/views/directive/signin.html', 'directive.signin'));

        beforeEach(inject(function(_$httpBackend_) {
            _$httpBackend_.whenGET('views/directive/signin.html').respond('<div></div>');
        }));

        describe('scope methods', function() {

            var element, scope, $rootScope, templateCache;

            beforeEach(inject(function($compile, _$rootScope_, $templateCache) {
                $rootScope  = _$rootScope_;
                element     = $compile('<sign-in />')($rootScope);
                scope       = element.scope();
                templateCache = $templateCache;
            }));

            describe('bad request', function() {

                it('should show the signin if a bad request is broadcast', function() {

                    $rootScope.$broadcast('event:auth:bad-request');

                    console.log('>>', templateCache.get('app/views/directive/signin.html'));

                    expect(scope.show).toBeTruthy();
                });
            });

        });
    });
});