(function() {
    var orderCtrl = angular.module('OrderControlModule', []);
    
    orderCtrl.config(function() { console.log ('Order Control Setup Done!')});

    orderCtrl.controller('OrderController', function($scope, $rootScope) {
        $scope.orderedItems = $rootScope.orderedItems;
        
        $scope.totalAmount = function() {
            var totalAmt = 0;
            for (orderItem in $scope.orderedItems) {
                totalAmt = totalAmt + ($scope.orderedItems[orderItem].price * $scope.orderedItems[orderItem].quantity);
            };
            
            return totalAmt;
        };
        
        $scope.deleteItem = function(index) {
            $rootScope.orderedItems.splice(index, 1);
        }
    });
    
    
}());