"use strict";
var app;
(function (app) {
    angular.module('productView', [
        'ngMaterial',
        'ngMessages',
        'ngRoute',
        'service.products'
    ]);
})(app || (app = {}));
