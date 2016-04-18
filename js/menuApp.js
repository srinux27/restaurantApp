(function() {
    var menuApp = angular.module('MenuAppModule', ['MenuControlModule', 'OrderControlModule']);
    
    menuApp.run(function($rootScope) {
            $rootScope.orderedItems = [];
    });
    
}());