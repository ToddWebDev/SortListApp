angular.module('sortListApp').controller('EditItemController', function($scope, groupsFactory, $routeParams, $location){
    
    var groupId = $routeParams.groupId;
    var itemId = $routeParams.itemId;
    $scope.group = null;
    $scope.item = {};
    console.log(groupId);
    console.log(itemId);
    
    
     function init() {
           $scope.group = groupsFactory.getGroup(groupId);
           $scope.item = groupsFactory.getItem(groupId-1, itemId);
//           $scope.index = groupsFactory.getGroupIndex(groupId);   
         }
  
          
        init();
  
  $scope.deleteItem = function(itemId, groupId){
      $scope.groupId = $routeParams.groupId;
      $scope.itemId = $routeParams.itemId;
    console.log($scope.groupId);
    console.log($scope.itemId);
    groupsFactory.removeItem($scope.itemId, $scope.groupId);
    $location.path("/items/" + $scope.groupId);

  }
  

});