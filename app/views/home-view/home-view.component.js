'use strict';

angular.
  module('homeView').
  component('homeView', {
    templateUrl: 'views/home-view/home-view.template.html',
    controllerAs: 'vm',
    controller: ['Product',
      function HomeViewController(Product) {
        this.products = {};
        this.products.promoted = Product.getPromoted();
      }
    ]
  });
