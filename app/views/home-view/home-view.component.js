'use strict';

// Register `phoneList` component, along with its associated controller and template
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
