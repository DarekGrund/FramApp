'use strict';

angular.
  module('homeView').
  component('homeView', {
    templateUrl: 'views/home-view/home-view.template.html',
    controllerAs: 'vm',
    controller: ['Product', '$location',
      function HomeViewController(Product, $location) {
        console.log($location);
        this.products = {};
        this.products.promoted = Product.getPromoted();
        this.test = 'Test';

        this.openLink = function(id) {
          $location.path('/products/' + id);
        };
      }
    ]
  });
