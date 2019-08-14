'use strict';

angular.
  module('productsList').
  component('productsList', {
    templateUrl: 'components/products-list/products-list.template.html',
    controllerAs: 'vm',
    controller: ['$location',
      function productsListController($location) {
        this.openLink = function(id) {
          $location.path('/products/' + id);
        };
      }
    ],
    bindings: {
      products: '='
    }
  });
