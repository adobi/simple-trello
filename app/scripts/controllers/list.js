'use strict';

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