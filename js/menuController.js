(function() {
    var menuCtrl = angular.module('MenuControlModule', []);
    
    menuCtrl.config(function() { console.log ('Menu Control Setup Done!')});
    
    menuCtrl.controller('MenuController', function($scope, orderedItems) {
        var menuItems = [
            {name:'Paneer Butter Masala', price: 350, code: 'VG100'},
            {name:'Kadai Paneer', price: 375, code: 'VG101'},
            {name:'Vegetarian Butter Gravy', price: 175, code: 'VG102'},
            {name:'Chicken Tikka Masala', price: 450, code: 'NG100'}, 
            {name:'Chicken Biriyani', price: 350, code: 'NG101'},
            {name:'Egg Masala', price: 250, code: 'EG100'},
            {name:'Special Omelet', price: 199, code: 'EG101'}
        ];
        
        $scope.menuItems = menuItems;
        
        $scope.placeOrder = function(code) {
            var itemFound =  false;
            
            for (var i=0; i<orderedItems.length; i++) {
                if (orderedItems[i].code === code) {
                    orderedItems[i].quantity = orderedItems[i].quantity + 1;
                    itemFound = true;
                    break;
                }
            };
            
            if (!itemFound) {
                for (var i=0; i<$scope.menuItems.length; i++) {
                    if($scope.menuItems[i].code === code) {
                        orderedItems.push(menuItems[i]);
                        orderedItems[orderedItems.length-1].quantity = 1;
                        itemFound = false;
                        break;
                    }
                };
            }
            
        };
    
    });

}());