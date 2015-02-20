(function () {
    'use strict';
    angular.module('suc.directives')
        .controller('SucHeadBarController', SucHeadBarController);

    SucHeadBarController.$inject = ['$location', '$translate'];

    function SucHeadBarController($location, $translate) {
        var accountHeadbar = this;

        activate();

        function activate() {
        }

        accountHeadbar.changeLanguage = function (key) {
            $translate.use(key);
        };
    }
})();