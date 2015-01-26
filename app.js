(function() {
    
    var app = angular.module('sortListApp', ['ngRoute']);
     
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CategoriesController',
                templateUrl: 'views/categories.html'
            })
            .when('/items/:groupId', {
                controller: 'ItemsController',
                templateUrl: 'views/items.html'
            })
            .when('/subitems/:categoryId', {
                controller: 'SubItemsController',
                templateUrl: 'views/subitems.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());