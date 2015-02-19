'use strict';

var simpleTrelloFirebase = angular
  .module('simpleTrelloFirebase', ['firebase', 'simpleTrelloConfig'])
  .factory('firebaseService', ['$firebase', 'CONFIG', function($firebase, CONFIG) {
    var ref = new Firebase(CONFIG.FirebaseUrl)
      , cards = []

    var getLists = function()
    {
      return $firebase(ref).$asArray()
    }

    var updateList = function(list)
    {
      ref.child(list.$id).update({name: list.name})
    }

    var deleteList = function(list)
    {
      ref.child(list.$id).remove()
    }

    var createList = function(list)
    {
      ref.push(list)
    }

    var getListCards = function(list)
    {
      this.cards = ref.child(list.$id).child('cards')

      return this.cards
    }

    var createCard = function(card)
    {
      this.cards.push(card)
    }

    var deleteCard = function(index)
    {
      this.cards.child(index).remove()
    }

    var updateCard = function(index, card)
    {
      this.cards.child(index).set(card)
    }

    return {
      getLists: getLists
      , updateList: updateList
      , deleteList: deleteList
      , createList: createList
      , getListCards: getListCards
      , createCard: createCard
      , deleteCard: deleteCard
      , updateCard: updateCard
    }
  }])
