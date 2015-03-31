angular.module('sortListApp').controller('CreateItemController', function($scope, groupsFactory, $routeParams, $location){
    
    $scope.isSubmitting = false;
    var groupId = $routeParams.groupId;
    
     function init() {
            //Search the groups for the groupId
          $scope.group = groupsFactory.getGroup(groupId);
          $scope.item = {};
         }
  
          
        init();
    
  $scope.saveItem = function(item, groupId){
    $scope.groupId = $routeParams.groupId;
    console.log($scope.group.title);
    $scope.id = groupsFactory.getItemCount($scope.groupId);
    item.id = $scope.id;
    $scope.item = groupsFactory.saveItem(item, $scope.groupId);
    $location.path("/items/" + $scope.groupId);
  }

});