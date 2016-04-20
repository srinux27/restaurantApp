(function () {

    var factModule = angular.module('FactoryModule', ['ngResource']);

    factModule.factory('ItemFactory', function ($resource) {
        var menuItems;
        
        var menuResource = $resource(
                'http://localhost:2403/menuitems/:id', 
                {id:'@id'}, 
                {update: {method:'PUT'}});

        return {
            getMenuItems: function () {
                menuItems = menuResource.query();
                return menuItems;
            },
            
            addMenuItem: function(newmenuitem) {
                menuResource.save(newmenuitem, function(respData) {
                    menuItems.push(respData);
                }, function() {
                    console.log('Failure')
                });
            },
            
            removeMenuItem: function(idx, itemID) {
                menuResource.delete({id:itemID}, function(idx) {
                    menuItems.splice(idx, 1);
                });
            },
            
            updateMenuItem: function(idx, item) {
               menuResource.update(item, function(respData){
                   menuItems[idx] = respData;
               }, function() {
                   
               });
            }
        };
    });


    factModule.factory('OrderFactory', function () {
        var orderedItems = [];

        return {
            getOrderedItems: function () {
                return orderedItems;
            }
            , addOrderedItems: function (item) {
                orderedItems.push(item);
            }
            , deleteOrderedItems: function (itemIndex) {
                orderedItems.splice(itemIndex, 1);

            }
        }

    });

}());