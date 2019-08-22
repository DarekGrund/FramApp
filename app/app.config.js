"use strict";
var app;
(function (app) {
    angular.module('app')
        .constant('API_URL', 'https://framapp-api.firebaseio.com');
})(app || (app = {}));
