"use strict";
var app;
(function (app) {
    angular.module('app', [
        'ngRoute',
        'categoriesNavigation',
        'productsList',
        'homeView',
        'categoryView',
        'productView',
        'loginButton'
    ]);
})(app || (app = {}));
