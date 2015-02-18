'use strict';

var simpleTrelloConfig = angular
  .module('simpleTrelloConfig', [])
  .constant('CONFIG', {'FirebaseUrl': 'https://adobi.firebaseio.com/'})

var simpleTrelloApp = angular
  .module('simpleTrelloApp', ['firebase', 'simpleTrelloConfig'])
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

