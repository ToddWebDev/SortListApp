(function() {
    
    var ItemsController = function ($scope, $routeParams, groupsFactory) {
        var groupId = $routeParams.groupId;
		$scope.group = null;


        
        function init() {
            //Search the groups for the groupId
           $scope.group = groupsFactory.getGroup(groupId);
         }
        
        init();
        
//        console.log($scope.group.items[1]);
        $scope.deleteItem = function(itemId){
    groupsFactory.removeItem(itemId, groupId);      
  }
    };
    
    ItemsController.$inject = ['$scope', '$routeParams','groupsFactory'];

    angular.module('sortListApp')
      .controller('ItemsController', ItemsController);
    
}());