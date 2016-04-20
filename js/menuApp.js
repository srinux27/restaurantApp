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
        }).when('/login', {
            templateUrl: 'partials/login.html'
            , controller: 'LoginController'
        }).when('/error', {
            template: '<br><h3>Invalid credentials .....</h3>'
        }).when('/logout', {
            templateUrl: 'partials/logout.html'
        , }).otherwise({
            template: '<br><h3>No Matching Routes Found!!!</h3>'
        });
    });

    menuApp.run(function ($rootScope) {
        $rootScope.isLogin = false;
    });


    //Below -- custom filter implementation
    menuApp.filter('truncate', function () {
        return function (input, param) {
            if (param instanceof Array) {
                if (param.length === 2) {
                    return ((input.length > param[0]) ? (input.substr(0, param[0]) + param[1] + param[1] + param[1]) : input);
                } else {
                    return input;
                }
            } else {
                return ((input.length > param) ? (input.substr(0, param) + '...') : input);
            }
        };
    });

    //Below - shows usage of the listener to listen to routing events
    //Also shows usage of the $location object to get access to property like path, absolute path etc.
    menuApp.controller('MainController', function ($scope, $rootScope, $location) {
        $scope.$on('$routeChangeSuccess', function () {
            if ($location.path() === '/logout') {
                $rootScope.isLogin = false;
            }
        });

        $scope.$on('$routeChangeStart', function () {
            if (!$rootScope.isLogin) {
                console.log($rootScope.isLogin);
                if ($location.path() === '/menuitems') {
                    $location.path('/login');
                }
            };
        });
    });

    //Below shows new controller for the login/logout functionality
    menuApp.controller('LoginController', function ($scope, $rootScope, $location) {
        $scope.doLogin = function () {
            if ($scope.login.username == 'admin') {
                $location.path('/menuitems');
                $rootScope.isLogin = true;
            } else {
                $location.path('/error');
            }
        }
    });

}());