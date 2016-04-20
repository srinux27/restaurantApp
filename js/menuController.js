(function() {
    var menuCtrl = angular.module('MenuControlModule', ['ServiceModule']);
    
    menuCtrl.config(function() { console.log ('Menu Control Setup Done!')});
    
    menuCtrl.controller('MenuController', function($scope, MenuServices) {
        var tempIndex;
        
        $scope.menuItems = MenuServices.getAllMenuItems();
        
        $scope.placeOrder = function(code) {
            MenuServices.placeOrder(code);
        };
        
        $scope.save = function() {
            if($scope.newmenuitem.id === undefined) {
                console.log('Adding....');
                MenuServices.addMenuItem($scope.newmenuitem);
            } else {
                console.log('Updating.....');
                MenuServices.editItem(tempIndex, $scope.newmenuitem);
            };
            
            $scope.newmenuitem = {};
        };
        
        $scope.remove = function(index,itemID) {
            MenuServices.removeItem(index, itemID);
        }
        
        $scope.edit = function(index, menuItem) {
            $scope.newmenuitem = angular.copy(menuItem);
            tempIndex = index;
        }
    });
}());