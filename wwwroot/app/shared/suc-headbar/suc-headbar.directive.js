(function(){
    'use strict';

    angular
        .module('suc.directives')
        .directive('sucHeadBar', SucHeadBar);

    function SucHeadBar() {
        var directive = {
            templateUrl: 'app/shared/suc-headbar/suc-headbar.view.html',
            restrict: 'E',
            link: link,
            controller: 'SucHeadBarController',
            controllerAs: 'vm'
        };
        return directive;

        function link(scope, el, attr, ctrl) {

        }
    }
})();