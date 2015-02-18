'use strict';

angular.module('simpleTrelloApp')
  .controller('CardsController', ['$scope', function($scope)
  {
    this.newCard = {}
    this.master = {}

    this.cards = []

    this.init = function(cards)
    {
      this.cards = cards
    }

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

    this.delete = function(index)
    {
      this.cards.splice(index, 1)
    }
  }])
  .directive('cards', function() {
    return {
      restrict: 'E'
      , templateUrl: 'views/cards.html'
    }
  })
  .directive('card', function() {
    return {
      restrict: 'E'
      , templateUrl: 'views/card.html'
    }
  })
  .directive('newCard', function() {
    return {
      restrict: 'E'
      , templateUrl: 'views/new-card.html'
    }
  })
