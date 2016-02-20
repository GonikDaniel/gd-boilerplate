(function() {
    'use strict';

    angular.module('gdBoilerplate.core', [
        /*
         * Angular modules
         */
        'ngAnimate', 'ui.router', 'ngSanitize',
        /*
         * Our reusable cross app code modules
         */
        'common.exception', 'common.logger', 'common.router',
        /*
         * 3rd Party modules
         */
        'ngDialog', 'restangular'
    ]);
})();
