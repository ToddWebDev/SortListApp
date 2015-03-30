angular.module('sortListApp').controller('CreateSubGroupController', function($scope, groupsFactory, $routeParams, $location){
    
    $scope.groupId = $routeParams.groupId;
    
    function init(){
            $scope.category = {};
        }

        init();
    
$scope.saveSubGroup = function(category, id){
    $scope.groupId = $routeParams.groupId;
    $scope.id = groupsFactory.getCategoryCount($scope.groupId);
        console.log($scope.id);
    category.count = 0;
    $scope.group = groupsFactory.saveSubGroup(category, $scope.id, $scope.groupId);
        $scope.category = {};
      $location.path("/items/" + $scope.groupId);
    }
    

    
});