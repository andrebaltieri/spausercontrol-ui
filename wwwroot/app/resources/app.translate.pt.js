(function () {
    'use strict';
    angular.module('suc')
        .config(function ($translateProvider) {
            $translateProvider.translations('pt', {
                ENDPOINT_ONLINE: 'Serviço rodando normalmente!',
                ENDPOINT_OFFLINE: 'Desculpe, seu serviço está fora!'
            });
        });
})();