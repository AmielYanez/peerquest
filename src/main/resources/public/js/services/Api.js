'use strict';
(function (angular) {


  angular
    .module(APP_NAME)
    .factory('Api', [
      '$http',
      function ($http) {
        var service = {};
        var API_HOST= 'http://169.45.223.124:8080'; // TODO: move it to constants file
        var baseUrl = API_HOST;

        service.query = function (operation, data) {
          return $http.post(API_HOST , angular.extend({
            operation: operation,
          }, data));
        };

        service.post = function (resource, data) {
          return $http.post(baseUrl + '/' + resource, data);
        };

        service.get = function (resource) {
          return $http.get(baseUrl + '/' + resource);
        };

        service.delete = function (resource) {
          return $http.delete(baseUrl + '/' + resource);
        };

        service.put = function (resource, data) {
          return $http.put(baseUrl + '/' + resource, data);
        };

        return service;
      },
    ]);
})(angular);
