'use strict';

/**
 * @ngdoc function
 * @name simpleTrelloApp.controller:ListsCtrl
 * @description
 * # ListsCtrl
 * Controller of the simpleTrelloApp
 */
angular.module('simpleTrelloApp')
  .controller('ListsController', function ($scope) {
    this.lists =
      [
        {
          name:'Alma'
          , cards: [
            {name: 'Alma 1'}
            , {name: 'Alma 2'}
          ]
        }
        , {
          name: 'Korte'
          , cards: []
        }
      ]

    this.setEditable = function(list, value)
    {
      list.isEditable = value
    }

    this.saveList = function(index, values)
    {
      this.lists[index].name = values.name
      this.lists[index].isEditable = false
    }
  })
  .controller('CardsController', function() {
    this.card = {}

    this.addCard = function(list)
    {
      list.cards.push(this.card)
      this.card = {}
    }

    this.saveCard = function(list, values, index)
    {
      list.cards[index].name = values.name
      list.cards[index].isEditable = false
    }

    this.setEditable = function(list, value, index)
    {
      list.cards[index].isEditable = value
    }

  })
  .directive('cards', function() {
    return {
      restrict: 'E'
      , templateUrl: 'views/cards.html'
    }
  })
  .directive('listDetails', function() {
    return {
      restrict: 'E'
      , templateUrl: 'views/list-details.html'
    }
  })
