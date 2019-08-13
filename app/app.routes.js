'use strict';

angular.
  module('app').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/home', {
          template: '<home-view></home-view>'
        }).
        when('/category/:categoryId', {
          template: '<category-view></category-view>'
        }).
        otherwise('/home');
    }
  ]);
