(function () {

    var factModule = angular.module('FactoryModule', ['ngResource']);

    factModule.factory('ItemFactory', function ($resource) {
        var menuItems;
        
        var menuResource = $resource('http://localhost:2403/menuitems');

        return {
            getMenuItems: function () {
                menuItems = menuResource.query();
                return menuItems;
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