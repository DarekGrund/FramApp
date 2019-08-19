'use strict';

angular.
  module('service.products', ['ngResource']).
  factory('Product', ['$resource',
    function($resource) {
      return {
        getAll: function() {
          return $resource('mock/products/all.json').query();
        },
        getById: function(id) {
          return $resource('mock/products/product-'+ id +'.json', {}, {
            query: {
              isArray: false
            }
          }).query();
        },
        getByCategoryId: function(id) {
          return $resource('mock/products/category-'+ id +'.json').query();
        },
        getPromoted: function() {
          return $resource('mock/products/promoted.json').query();
        }
      };
    }
  ]);
