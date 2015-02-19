'use strict';

simpleTrelloApp
  .controller('CardsController', ['firebaseService', function (firebaseService)
  {
    this.firebaseService = firebaseService

    this.newCard = {}
    this.master = {}

    this.cards = []

    this.init = function(list)
    {
      this.cards = this.firebaseService.getListCards(list)
    }

    this.create = function()
    {
      this.firebaseService.createCard(this.newCard)

      this.newCard = {}
    }

    this.save = function(card, index)
    {
      this.setEditable(card, false)

      this.firebaseService.updateCard(index, card)
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
      this.firebaseService.deleteCard(index)
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
