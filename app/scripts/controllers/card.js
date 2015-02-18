'use strict';

simpleTrelloApp
  .controller('CardsController', ['$scope', '$firebase', 'CONFIG', function ($scope, $firebase, CONFIG)
  {
    this.newCard = {}
    this.master = {}

    this.cards = []

    this.init = function(list)
    {
      $scope.list = list

      this.ref = new Firebase(CONFIG.FirebaseUrl + list.$id)

      this.cards = this.ref.child('cards')
    }

    this.create = function()
    {
      this.cards.push(this.newCard)
      
      this.newCard = {}
    }

    this.save = function(card, index)
    {
      this.setEditable(card, false)

      this.cards.child(index).set(card)
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
      this.cards.child(index).remove()
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
