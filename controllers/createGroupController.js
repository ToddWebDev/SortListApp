angular.module('sortListApp').controller('CreateGroupController', function($scope, groupsFactory, $location){
    
    function init(){
	       $scope.groups = groupsFactory.getGroups();   
            console.log($scope.groups);
            $scope.group = {};
        }

    
    
        init();
    
    $scope.saveGroup = function(group, id){
        $scope.id = groupsFactory.getCount();
        console.log($scope.id);
        $scope.group = groupsFactory.saveGroup(group, $scope.id);
        $scope.group = {};
        $location.path("/");
    }
    

    
});