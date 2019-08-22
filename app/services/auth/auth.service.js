'use strict';

angular.
  module('service.auth', ['ngResource']).
  factory('Auth', [
    function() {
      return {
        login: function(email, password) {

        },
        logout: function() {

        },
        isLoggedIn: function() {
          return false;
        }
      };
    }
  ]);

