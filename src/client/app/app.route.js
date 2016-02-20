angular.module('app').config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/step1'
        })

        .when('/step1', {
            templateUrl: 'app/step1/step1.html',
            controller: 'Step1Controller',
            controllerAs: 'step1'
        })

        .when('/step2', {
            templateUrl: 'app/step2/step2.html',
            controller: 'Step2Controller',
            controllerAs: 'step2'
        })

        .when('/step3', {
            templateUrl: 'app/step3/step3.html',
            controller: 'Step3Controller',
            controllerAs: 'step3'
        })

        .otherwise({redirectTo: '/'});
        // if(window.history && window.history.pushState){
        //     $locationProvider.html5Mode(true);
        // }
}]);