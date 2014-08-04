'use strict';

angular.module('app', ['ngRoute', 'app.controllers', 'app.services']).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/contacts', {
        templateUrl: 'partials/contacts.html',
        controller: 'ContactsController'
    });
    $routeProvider.when('/contacts/:id', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactController'
    });
    $routeProvider.otherwise({
        redirectTo: '/contacts'
    });
}]);