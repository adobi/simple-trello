'use strict';

simpleTrelloApp
  .controller('ListsController', ['$scope', '$firebase', 'CONFIG', function ($scope, $firebase, CONFIG)
  {
    this.ref = new Firebase(CONFIG.FirebaseUrl)

    this.store = $firebase(this.ref)
    this.lists = this.store.$asArray();

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

    this.update = function(list)
    {
      this.ref.child(list.$id).update({name: list.name})
      this.setEditable(list, false)
    }

    this.create = function()
    {
      this.newList.cards = []
      this.lists.$add(this.newList)
      this.newList = {}
    }

    this.cancelEdit = function(list)
    {
      list.name = this.master.name
      this.setEditable(list, false)
    }

    this.delete = function(list)
    {
      this.ref.child(list.$id).remove()
    }
  }])
  .directive('listDetails', function() {
    return {
      restrict: 'E'
      , templateUrl: 'views/list-details.html'
    }
  })
  .directive('newList', function() {
    return {
      restrict: 'E'
      , templateUrl: 'views/new-list.html'
    }
  })