'use strict';

/**
 * @ngdoc function
 * @name simpleTrelloApp.controller:ListsCtrl
 * @description
 * # ListsCtrl
 * Controller of the simpleTrelloApp
 */
angular.module('simpleTrelloApp')
  .controller('ListsController', ['$scope', function ($scope)
  {
    this.lists =
      [
        {
          name:'Alma'
          , cards: [
            {name: 'Alma 1'}
            , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          , {name: 'Alma 2'}
          ]
        }
        , {
          name: 'Korte'
          , cards: []
        }
      ]

    this.newList = {}
    this.master = {}

    this.setEditable = function(list, value)
    {
      list.isEditable = value
      if (value) {
        this.master = angular.copy(list)
      } else {
        this.master = {}
      }
    }

    this.saveList = function(list)
    {
      this.setEditable(list, false)
    }

    this.createList = function()
    {
      this.newList.cards = []
      this.lists.push(this.newList)
      this.newList = {}
    }

    this.cancelEdit = function(list)
    {
      list.name = this.master.name
      this.setEditable(list, false)
    }

  }])
  .controller('CardsController', ['$scope', function($scope)
  {
    this.newCard = {}
    this.master = {}

    this.addCard = function(list)
    {
      list.cards.push(this.newCard)
      this.newCard = {}
    }

    this.saveCard = function(card)
    {
      this.setEditable(card, false)
    }

    this.setEditable = function(card, value)
    {
      card.isEditable = value
      if (value) {
        this.master = angular.copy(card)
      } else {
        this.master = {}
      }
    }

    this.cancelEdit = function(card)
    {
      card.name = this.master.name
      this.setEditable(card, false)
    }
  }])
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