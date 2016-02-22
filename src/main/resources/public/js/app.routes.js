/**
 * Created by ayanez on 2/21/16.
 */

(function (angular) {
    'use strict';
    angular.module(APP_NAME).config([
        '$stateProvider',
        '$urlRouterProvider',
        '$httpProvider',
        RouteConfiguration,
    ]);

    function RouteConfiguration($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '../views/home.html',
            })
            .state('matches', {
                url: '/matches',
                templateUrl: '../views/match.html',
                controller: 'MatchesController',
            });

        $urlRouterProvider.otherwise('matches');
    }
}(angular));
