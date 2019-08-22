'use strict';

angular.
  module('service.products', ['ngResource']).
  factory('Product', ['$resource', 'API_URL',
    function($resource, API_URL) {
      return {
        getById: function(id) {
          return $resource(API_URL + '/products/:productId.json').get({productId: id});
        },
        getByCategoryId: function(id) {
          return $resource(API_URL + '/products.json', {}, {
            get: {
              isArray: true,
              transformResponse: function(data) {
                var dataObject = angular.fromJson(data);
                return dataObject.filter(function(item) {
                  return item.category === id;
                });
              }
            }
          }).get();
        },
        getPromoted: function() {
          return $resource(API_URL + '/products.json', {}, {
            get: {
              isArray: true,
              transformResponse: function(data) {
                var dataObject = angular.fromJson(data);
                return dataObject.filter(function(item) {
                  return item.promoted === true;
                });
              }
            }
          }).get();
        }
      };
    }
  ]);

