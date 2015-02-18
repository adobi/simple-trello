'use strict';

/**
 * @ngdoc overview
 * @name simpleTrelloApp
 * @description
 * # simpleTrelloApp
 *
 * Main module of the application.
 */
var simpleTrelloApp = angular
  .module('simpleTrelloApp', ['firebase'])
  .directive('a', function() {
    return {
      restrict: 'E',
      link: function(scope, elem, attrs) {
        if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
          elem.on('click', function(e){
            e.preventDefault()
          });
        }
      }
    };
  });
