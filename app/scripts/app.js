'use strict';

var simpleTrelloApp = angular
  .module('simpleTrelloApp', ['simpleTrelloFirebase'])
  .directive('a', function() {
    return {
      restrict: 'E',
      link: function(scope, elem, attrs) {
        if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
          elem.on('click', function(e){
            e.preventDefault()
          })
        }
      }
    }
  })

