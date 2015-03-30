(function() {
    
    var app = angular.module('sortListApp', ['ngRoute']);
     
    app.config(function($routeProvider) {
        $routeProvider
            .when('/items/:groupId/edit/:itemId', {
                controller: 'EditItemController',
                templateUrl: 'views/edit.html'
            })
.when('/items/:groupId/subitems/:categoryId/edit/:itemId', {
                controller: 'EditSubItemController',
                templateUrl: 'views/editSubItem.html'
            })
            .when('/items/:groupId/subitems/:categoryId/new', {
                controller: 'CreateSubItemsController',
                templateUrl: 'views/newsubitem.html'
            })
            .when('/items/:groupId/subitems/:categoryId', {
                controller: 'SubItemsController',
                templateUrl: 'views/subitems.html'
            })
            .when('/subitems/:groupId/edit/:categoryId', {
                controller: 'EditSubGroupController',
                templateUrl: 'views/editsubgroup.html'
            })
            .when('/subitems/:groupId/new', {
                controller: 'CreateSubGroupController',
                templateUrl: 'views/addsubgroup.html'
            })
            .when('/items/:groupId/new', {
                controller: 'CreateItemController',
                templateUrl: 'views/new.html'
            })
            .when('/items/:groupId/edit', {
                controller: 'EditGroupController',
                templateUrl: 'views/editgroup.html'
            })
            .when('/items/:groupId', {
                controller: 'ItemsController',
                templateUrl: 'views/items.html'
            })
            .when('/new', {
                controller: 'CreateGroupController',
                templateUrl: 'views/addgroup.html'
            })
            .when('/', {
                controller: 'CategoriesController',
                templateUrl: 'views/categories.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());