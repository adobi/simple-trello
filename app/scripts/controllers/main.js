'use strict';

/**
 * @ngdoc function
 * @name simpleTrelloApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleTrelloApp
 */
angular.module('simpleTrelloApp')
  .controller('MainController', function ($scope) {
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

    this.setListEdit = function(index, value)
    {
      this.lists[index].isEditable = value
    }

    this.saveList = function(index, values)
    {
      this.lists[index].name = values.name
      this.lists[index].isEditable = false
    }

    this.setCardEdit = function(index, value, cindex)
    {
      this.lists[index].cards[cindex].isEditable = value
    }

    this.saveCard = function(index, values, cindex)
    {
      this.lists[index].cards[cindex].name = values.name
      this.lists[index].cards[cindex].isEditable = false
    }
  })
  .controller('CardController', function() {
    this.card = {}

    this.addCard = function(list)
    {
      list.cards.push(this.card)
      this.card = {}
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
