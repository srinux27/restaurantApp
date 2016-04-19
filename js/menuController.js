(function() {
    var menuCtrl = angular.module('MenuControlModule', ['ServiceModule']);
    
    menuCtrl.config(function() { console.log ('Menu Control Setup Done!')});
    
    menuCtrl.controller('MenuController', function($scope, MenuServices) {
        $scope.menuItems = MenuServices.getAllMenuItems();
        
        $scope.placeOrder = function(code) {
            MenuServices.placeOrder(code);
        };
    });
}());