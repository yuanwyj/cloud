(function() {
    'use strict';

    angular.module('gulpAngular').config(routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/about/about.html',
                controller: 'AboutController',
                controllerAs: 'about'
            })
            .state('change-info', {
                url: '/change-info',
                templateUrl: 'app/change-info/change-info.html',
                controller: 'ChangeinfoController',
                controllerAs: 'change-info'
            })
            .state('self', {
                url: '/self',
                templateUrl: 'app/self/self.html',
                controller: 'EmployeeCtrl',
                controllerAs: 'self'
            })
            .state('sellerchange', {
                url: '/sellerchange',
                templateUrl: 'app/sellerChange/sellerChange.html',
                controller: 'SellerchangeController',
                controllerAs: 'sellerchange'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            })
            .state('user', {
                url: '/user',
                templateUrl: 'app/user/user.html',
                controller: 'UserController',
                controllerAs: 'user'
            })
            .state('userInfo', {
                url: '/userInfo',
                templateUrl: 'app/seller/seller.html',
                controller: 'UserinfoController',
                controllerAs: 'userInfo'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/contact-us/contact-us.html',
                controller: 'ContactController',
                controllerAs: 'contact',
                abstract: true
            })
                .state('contact.support', {
                    url: '/support',
                    templateUrl: 'app/contact-us/support.html'
                })
                .state('contact.sales', {
                    url: '/sales',
                    templateUrl: 'app/contact-us/sales.html'
                })
                .state('contact.info', {
                    url: '/info',
                    templateUrl: 'app/contact-us/info.html'
                })
            ;

        $urlRouterProvider.otherwise('/');
    }

})();
