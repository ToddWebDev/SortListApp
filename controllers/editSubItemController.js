angular.module('sortListApp').controller('EditSubItemController', function($scope, groupsFactory, $routeParams, $location){
    
    var groupId = $routeParams.groupId;
    var categoryId = $routeParams.categoryId;
    var itemId = $routeParams.itemId;
    $scope.item = {};
    console.log(groupId);
    console.log(categoryId);
    console.log(itemId);
    
    
     function init() {
      $scope.group = groupsFactory.getGroup(groupId);
      $scope.category = groupsFactory.getCategory(groupId, categoryId);
      $scope.item = groupsFactory.getSubItem(groupId, categoryId, itemId);
      }
  
      init();
    
    console.log($scope.item);
  
  $scope.deleteSubItem = function(itemId, categoryId, groupId){
      $scope.groupId = $routeParams.groupId;
      $scope.categoryId = $routeParams.categoryId;
      $scope.itemId = $routeParams.itemId;
    console.log($scope.groupId);
    console.log($scope.itemId);
    groupsFactory.removeSubItem($scope.itemId, $scope.groupId, $scope.categoryId);
     $location.path("/items/" + $scope.groupId + "/subitems/" + $scope.categoryId);
  }
  

});