(function () {
    'use strict';
    angular.module('suc')
        .config(function ($translateProvider) {
            $translateProvider.translations('en', {
                ENDPOINT_ONLINE: 'Service is up and running!',
                ENDPOINT_OFFLINE: 'Sorry, your service is down!'
            });
        });
})();