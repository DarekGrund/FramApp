'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('categoryView').
  component('categoryView', {
    templateUrl: 'views/category-view/category-view.template.html',
    controller: [
      function CategoryViewController() {
        this.test = 'Test';
      }
    ]
  });
