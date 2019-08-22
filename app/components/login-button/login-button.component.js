'use strict';

angular.
  module('loginButton').
  component('loginButton', {
    templateUrl: 'components/login-button/login-button.template.html',
    controllerAs: 'vm',
    controller: ['Auth',
      function loginButtonController(Auth) {
        this.shouldDisplayLoginButton = !Auth.isLoggedIn();
      }
    ]
  });
