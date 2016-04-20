(function () {
    var menuApp = angular.module('MenuAppModule', ['ngRoute', 'MenuControlModule', 'OrderControlModule']);

    //--Creating empty array to share ordered items between the controllers
    //--code commented as logic moved to services and factories
    //menuApp.value('orderedItems', []);
    menuApp.config(function ($routeProvider) {
        $routeProvider.when('/', {
            template: '<br><h3>Welcome to this Restaurant Application!!</h3>'
        }).when('/menucard', {
            templateUrl: 'partials/menucard.html'
        }).when('/menuitems', {
            templateUrl: 'partials/menuitems.html'
            , controller: 'MenuController'
        }).otherwise({
            template: '<br><h3>No Matching Routes Found!!!</h3>'
        });
    });


    //Below -- custom filter implementation
    menuApp.filter('truncate', function () {
        return function (input, param) {
            if (param instanceof Array) {
                if (param.length===2) {
                    return ((input.length > param[0]) ? (input.substr(0, param[0]) + param[1] + param[1] + param[1]) : input);   
                } else {
                    return input;
                }
            } else {
                return ((input.length > param) ? (input.substr(0, param) + '...') : input);
            }
        };
    });

}());