(function() {
    var orderCtrl = angular.module('OrderControlModule', ['ServiceModule']);
    
    orderCtrl.config(function() { console.log ('Order Control Setup Done!')});

    orderCtrl.controller('OrderController', function($scope, OrderServices) {
        $scope.orderedItems = OrderServices.getAllOrderedItems();
        
        $scope.totalAmount = function() {
            return OrderServices.totalAmount();
        };
        
        //Alternate function to calculate total amount using Angular function forEach()
        //This function does the exact same thing as totalAmount mentioned above
        $scope.totalAmtAlt =  function() {
            return OrderServices.totalAmtAlt();
        };
        
        $scope.deleteItem = function(index) {
            OrderServices.deleteOrderedItems(index);
        };
    });
    
    
}());