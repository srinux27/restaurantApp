(function() {
    var orderCtrl = angular.module('OrderControlModule', []);
    
    orderCtrl.config(function() { console.log ('Order Control Setup Done!')});

    orderCtrl.controller('OrderController', function($scope, orderedItems) {
        $scope.orderedItems = orderedItems;
        
        $scope.totalAmount = function() {
            var totalAmt = 0;
            for (orderItem in $scope.orderedItems) {
                totalAmt = totalAmt + ($scope.orderedItems[orderItem].price * $scope.orderedItems[orderItem].quantity);
            };
            
            return totalAmt;
        };
        
        //Alternate function to calculate total amount using Angular function forEach()
        //This function does the exact same thing as totalAmount mentioned above
        $scope.totalAmtAlt = function() {
            var totalAmt = 0;
            angular.forEach(orderedItems, function(orderItem) { 
                totalAmt = totalAmt + (orderItem.price * orderItem.quantity);
            });
            
            return totalAmt;
        };
        
        $scope.deleteItem = function(index) {
            orderedItems.splice(index, 1);
        }
    });
    
    
}());