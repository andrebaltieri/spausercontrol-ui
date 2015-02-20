(function () {
    'use strict';
    angular.module('suc')
        .config(function ($translateProvider) {
            $translateProvider.translations('en', {
                ENDPOINT_ONLINE: 'Service is up and running!',
                ENDPOINT_OFFLINE: 'Sorry, your service is down!',
                APP_SLOGAN: 'smart room scheduler',
                REGISTER: 'register',
                NAME: 'Name',
                EMAIL: 'E-mail',
                PASSWORD: 'Password',
                CONFIRM_PASSWORD: 'Confirm Password',
                INPUT_YOUR_NAME: 'Input your Name',
                INPUT_YOUR_EMAIL: 'Input your E-mail',
                INPUT_YOUR_PASSWORD: 'Input your Password',
                INPUT_YOUR_CONFIRM_PASSWORD: 'Confirm your Password',
                CONTINUE: 'Continue',
                LANGUAGE: 'Language',
                PORTUGUESE: 'Portuguese',
                ENGLISH: 'English',
                INVALID_NAME: 'Name is invalid.',
                INVALID_EMAIL: 'E-mail is invalid.'
            });
        });
})();