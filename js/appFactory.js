(function() {

    var factModule = angular.module('FactoryModule', ['ngResource']);
    
    factModule.factory('ItemFactory', function() {
        var menuItems = [
            {name:'Paneer Butter Masala', price: 350, code: 'VG100'},
            {name:'Kadai Paneer', price: 375, code: 'VG101'},
            {name:'Vegetarian Butter Gravy', price: 175, code: 'VG102'},
            {name:'Chicken Tikka Masala', price: 450, code: 'NG100'}, 
            {name:'Chicken Biriyani', price: 350, code: 'NG101'},
            {name:'Egg Masala', price: 250, code: 'EG100'},
            {name:'Special Omelet', price: 199, code: 'EG101'}
        ];
        
        return {
            getMenuItems:function() {
                return menuItems;    
            }
        };
    });
    
    
    factModule.factory('OrderFactory', function() {
        var orderedItems = [];
        
        return {
            getOrderedItems : function() {
                return orderedItems;
            },
            addOrderedItems : function(item) {
                orderedItems.push(item);
            },
            deleteOrderedItems : function(itemIndex) {
                orderedItems.splice(itemIndex, 1);
                
            }
        }
        
    });

}());