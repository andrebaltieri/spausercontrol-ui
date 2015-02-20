(function(){
    'use strict';
    angular.module('suc').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'RegisterController',
                controllerAs: 'register',
                templateUrl: 'app/modules/account/register/register.html'
            });
    });
})();