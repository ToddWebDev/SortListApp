angular.module('sortListApp').controller('EditGroupController', function($scope, groupsFactory, $routeParams, $location){
    
    var groupId = $routeParams.groupId;
    
     function init() {
           $scope.group = groupsFactory.getGroup(groupId);
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