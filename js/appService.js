(function() {
    var svcModule = angular.module('ServiceModule', ['FactoryModule']);
    
    svcModule.service('MenuServices', function(ItemFactory, OrderFactory) {
        this.getAllMenuItems = function() {
            return ItemFactory.getMenuItems();
        };
        
        this.placeOrder = function(menuItem) {
            var itemFound =  false;
            var orderedItems = OrderFactory.getOrderedItems();
            
            for (var i=0; i<orderedItems.length; i++) {
                if (orderedItems[i].code === menuItem.code) {
                    orderedItems[i].quantity = orderedItems[i].quantity + 1;
                    itemFound = true;
                    break;
                }
            };
            
            if (!itemFound) {
                        orderedItems.push(menuItem);
                        orderedItems[orderedItems.length-1].quantity = 1;
                        itemFound = false;
            }
        };
        
        this.addMenuItem = function(newmenuitem) {
            ItemFactory.addMenuItem(newmenuitem);
        };
        
        this.removeItem = function(idx, itemID) {
            ItemFactory.removeMenuItem(idx, itemID);
        }
        
        this.editItem = function(idx, item) {
            ItemFactory.updateMenuItem(idx, item);
        }
    });
    
    svcModule.service('OrderServices', function(OrderFactory) {
        this.getAllOrderedItems = function() {
            return OrderFactory.getOrderedItems();
        };
        
        this.addOrderedItems = function(item) {
          OrderFactory.addOrderedItems(item);
        };
        
        this.deleteOrderedItems = function(itemIndex) {
            OrderFactory.deleteOrderedItems(itemIndex);
        };
        
        this.totalAmount = function() {
            var totalAmt = 0;
            for (orderItem in OrderFactory.getOrderedItems()) {
                totalAmt = totalAmt + (OrderFactory.getOrderedItems()[orderItem].price * OrderFactory.getOrderedItems()[orderItem].quantity);
            };
            
            return totalAmt;
        };
        
        this.totalAmtAlt = function() {
            var totalAmt = 0;
            angular.forEach(OrderFactory.getOrderedItems(), function(orderItem) { 
                totalAmt = totalAmt + (orderItem.price * orderItem.quantity);
            });
            
            return totalAmt;
        };
        
    });
    
}());