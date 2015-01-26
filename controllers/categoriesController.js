(function() {
    
    var CategoriesController = function ($scope, groupsFactory, appSettings) {
        $scope.sortBy = 'title';
        $scope.reverse = false;
        $scope.groups = [];
        $scope.appSettings = appSettings;
        
        function init(){
	       $scope.groups = groupsFactory.getGroups();   
        }
        
        init();
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;

        };
        

}; //end function
    
    CategoriesController.$inject = ['$scope','groupsFactory', 'appSettings'];

    angular.module('sortListApp')
      .controller('CategoriesController', CategoriesController);
    
}());