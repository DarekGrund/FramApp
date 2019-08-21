'use strict';

angular.
  module('service.categories', ['ngResource']).
  factory('Category', ['$resource',
    function($resource) {
      return {
        getAll: function() {
          //const t = $resource('https://project-5613440220430148247.firebaseio.com/api/v1/categories.json').query();
          //console.log(t);

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
