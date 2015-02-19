'use strict';

simpleTrelloApp
  .controller('ListsController', ['firebaseService', function (firebaseService)
  {
    this.firebaseService = firebaseService

    this.lists = this.firebaseService.getLists()

    this.newList = {}
    this.master = {}

    this.update = function(list)
    {
      this.firebaseService.updateList(list)
      this.setEditable(list, false)
    }

    this.create = function()
    {
      this.firebaseService.createList(this.newList)
      this.newList = {}
    }

    this.delete = function(list)
    {
      this.firebaseService.deleteList(list)
    }

    this.setEditable = function(list, value)
    {
      list.isEditable = value
      if (value) {
        this.master = angular.copy(list)
      } else {
        this.master = {}
      }
    }

    this.cancelEdit = function(list)
    {
      list.name = this.master.name
      this.setEditable(list, false)
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