/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
        .module('gdBoilerplate.core')
        .constant('toastr', toastr)
        .constant('moment', moment);
})();
