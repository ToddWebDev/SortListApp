angular.module('sortListApp').controller('CreateSubItemsController', function($scope, groupsFactory, $routeParams, $location){
    
    $scope.isSubmitting = false;
    var groupId = $routeParams.groupId;
    var categoryId = $routeParams.categoryId;
    
     function init() {
            //Search the groups for the groupId
    $scope.group = groupsFactory.getGroup(groupId);
    $scope.category = groupsFactory.getCategory(groupId, categoryId);
    $scope.item = {};
         }
  
          
        init();
    
  $scope.saveSubItem = function(item, groupId, categoryId){
    $scope.groupId = $routeParams.groupId;
    $scope.categoryId = $routeParams.categoryId;
    console.log($scope.category.title);
    console.log(item.title);
    $scope.id = groupsFactory.getSubItemCount($scope.groupId, $scope.categoryId);
    item.id = $scope.id;
    console.log(item.id);
    $scope.item = groupsFactory.saveSubItem(item, $scope.groupId, $scope.categoryId);
    console.log(item);
    $location.path("/items/" + $scope.groupId + "/subitems/" + $scope.categoryId);
  }

});