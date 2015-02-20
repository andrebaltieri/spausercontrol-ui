(function () {
    'use strict';

    angular
        .module('suc.directives')
        .directive('sucInputPassword', sucInputPassword);

    function sucInputPassword() {
        var directive = {
            templateUrl: 'app/shared/suc-input-password/suc-input-password.view.html',
            restrict: 'E',
            require: '^form',
            scope: {
                id: "@id",
                ngModel: "=ngModel"
            },
            link: link
        };
        return directive;

        function link(scope, el, attr, ctrl) {
            scope.form = ctrl;
        }
    }
})();