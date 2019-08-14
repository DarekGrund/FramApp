'use strict';

angular.
  module('homeView').
  component('homeView', {
    templateUrl: 'views/home-view/home-view.template.html',
    controller: [
      function HomeViewController() {
        this.test = 'Test';
      }
    ]
  });
