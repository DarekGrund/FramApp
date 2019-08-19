'use strict';

angular.
  module('productView').
  component('productView', {
    templateUrl: 'views/product-view/product-view.template.html',
    controllerAs: 'vm',
    controller: ['Product', '$routeParams',
      function ProductViewController(Product, $routeParams) {
        var productId = $routeParams.productId;
        this.details = Product.getById(productId);
      }
    ]
  });
