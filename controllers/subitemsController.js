(function() {
    
    var SubItemsController = function ($scope, $routeParams, groupsFactory) {
        var groupId = $routeParams.groupId;
        var categoryId = $routeParams.categoryId;
		$scope.group = null;
        $scope.category = null;


        
        function init() {
            //Search the groups for the groupId
            $scope.group = groupsFactory.getGroup(groupId);
                console.log($scope.group.title);
        $scope.category = groupsFactory.getCategory(groupId, categoryId);
            console.log($scope.category.title);
         }
        
        init();
        
//        console.log($scope.group.items[1]);
        $scope.deleteSubItem = function(itemId){
            groupsFactory.removeSubItem(itemId, groupId, categoryId);      
        }
    };

    angular.module('sortListApp')
      .controller('SubItemsController', SubItemsController);
    
}());