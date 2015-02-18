(function () {
    'use strict';
    angular.module('suc').constant('APP_SETTINGS', {
        "VERSION": "0.0.1",
        "CURR_ENV": "dev",
        "SERVICE_URL": "http://localhost:12295/"
    });

    angular.module('suc').config(function ($translateProvider) {
        var lang = localStorage.getItem('lang');
        if (lang == undefined || lang == 'undefined' || lang == '') {
            localStorage.setItem('lang', 'en');
        }
        $translateProvider.preferredLanguage(localStorage.getItem('lang'));
    });

    angular.module('suc').run(function ($http, APP_SETTINGS, $translate) {

        testServiceEndPoint();

        function testServiceEndPoint() {
            $translate(['ENDPOINT_ONLINE', 'ENDPOINT_OFFLINE'])
                .then(function (translations) {
                    callEndPoint(translations.ENDPOINT_ONLINE, translations.ENDPOINT_OFFLINE);
                });
        }

        function callEndPoint(serverIsOnlineMessage, serverIsOfflineMessage) {
            $http.get(APP_SETTINGS.SERVICE_URL + 'api/status').
                success(function (data, status, headers, config) {
                    toastr.success(serverIsOnlineMessage);
                }).
                error(function (data, status, headers, config) {
                    toastr.success(serverIsOfflineMessage);
                });
        }
    });
})();
