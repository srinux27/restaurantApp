(function() {
    var menuApp = angular.module('MenuAppModule', ['MenuControlModule', 'OrderControlModule']);
    
    //Creating empty array to share ordered items between the controllers
    menuApp.value('orderedItems', []);
}());