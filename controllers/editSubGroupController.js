angular.module('sortListApp').controller('EditSubGroupController', function($scope, groupsFactory, $routeParams, $location){
    
    var groupId = $routeParams.groupId;
    var categoryId = $routeParams.categoryId;
    
     function init() {
        $scope.group = groupsFactory.getGroup(groupId);
        $scope.category = groupsFactory.getCategory(groupId, categoryId);
         }
  
          
        init();
    
    console.log(groupId);
  
  $scope.back = function(){
      $location.path("/");
  }
  
  $scope.deleteGroup = function(groupId){
        $scope.groupId = $routeParams.groupId;
    groupsFactory.removeGroup($scope.groupId);
  }
  

});