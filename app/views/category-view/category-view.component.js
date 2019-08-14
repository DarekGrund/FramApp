'use strict';

angular.
  module('categoryView').
  component('categoryView', {
    templateUrl: 'views/category-view/category-view.template.html',
    controllerAs: 'vm',
    controller: ['Category', 'Product', '$routeParams',
      function CategoryViewController(Category, Product, $routeParams) {
        var categoryId = $routeParams.categoryId;
        this.details = Category.getById(categoryId);
        this.products = Product.getByCategoryId(categoryId);
      }
    ]
  });
