'use strict';

angular.
  module('service.categories', ['ngResource']).
  factory('Category', ['$resource',
    function($resource) {
      return {
        getAll: function() {
          return $resource('mock/categories/all.json').query();
        },
        getById: function(id) {
          return $resource('mock/categories/'+ id +'.json', {}, {
            query: {
              isArray: false
            }
          }).query();
        }
      };
    }
  ]);
