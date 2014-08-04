'use strict';

/* Services */
angular.module('app.services', ['ngResource']).
factory('ContactService', function($resource) {
    return $resource('contacts/:id', {
        id: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
});