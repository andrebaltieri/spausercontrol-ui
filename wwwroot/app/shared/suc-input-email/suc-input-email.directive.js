(function () {
    'use strict';

    angular
        .module('suc.directives')
        .directive('sucInputEmail', sucInputEmail);

    function sucInputEmail() {
        var directive = {
            templateUrl: 'app/shared/suc-input-email/suc-input-email.view.html',
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