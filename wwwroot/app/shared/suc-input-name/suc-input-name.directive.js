(function () {
    'use strict';

    angular
        .module('suc.directives')
        .directive('sucInputName', sucInputName);

    function sucInputName() {
        var directive = {
            templateUrl: 'app/shared/suc-input-name/suc-input-name.view.html',
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