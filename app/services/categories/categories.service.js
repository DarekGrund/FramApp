'use strict';

angular.
  module('service.categories', ['ngResource']).
  factory('Category', ['$resource', 'API_URL',
    function($resource, API_URL) {
      return {
        getAll: function() {
          return $resource(API_URL + '/categories.json', {}, {
            get: {
              isArray: true,
              transformResponse: function(data) {
                var dataObject = angular.fromJson(data);
                return transformObjectKeysToArray(dataObject);
              }
            }
          }).get();
        },
        getById: function(id) {
          return $resource(API_URL + '/categories/:categoryId.json').get({categoryId: id});
        }
      };
    }
  ]);

function mapKeyToObjectId(key, obj) {
  return Object.assign({}, obj, {id: key});
}

function transformObjectKeysToArray(obj) {
  var arr = [];
  for(var key in obj) {
    var modifiedObject = mapKeyToObjectId(key, obj[key]);
    arr.push(modifiedObject);
  }
  return arr;
}
