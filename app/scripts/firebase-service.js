(function() {

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
        return ref.child(list.$id).child('cards')
      }

      var createCard = function(list, card)
      {
        getListCards(list).push(card)
      }

      var deleteCard = function(list, index)
      {
        getListCards(list).child(index).remove()
      }

      var updateCard = function(list, index, card)
      {
        getListCards(list).child(index).set(card)
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

}) ();
'use strict';