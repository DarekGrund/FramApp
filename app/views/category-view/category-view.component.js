'use strict';

angular.
  module('categoryView').
  component('categoryView', {
    templateUrl: 'views/category-view/category-view.template.html',
    controllerAs: 'vm',
    controller: ['Category', '$routeParams',
      function CategoryViewController(Category, $routeParams) {
        var categoryId = $routeParams.categoryId;
        this.details = Category.getById(categoryId);
      }
    ]
  });
