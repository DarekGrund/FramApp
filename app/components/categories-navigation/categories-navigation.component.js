'use strict';

angular.
  module('categoriesNavigation').
  component('categoriesNavigation', {
    templateUrl: 'components/categories-navigation/categories-navigation.template.html',
    controllerAs: 'vm',
    controller: ['Category',
      function CategoryViewController(Category) {
        this.categories = Category.getAll();
      }
    ]
  });
