'use strict';

/* Controllers */
angular.module('app.controllers', []).
controller('ContactsController', ['$scope', 'ContactService', function($scope, ContactService) {
    $scope.contacts = getContactList();

    $scope.addContact = function() {
        ContactService.save({
            name: $scope.name,
            address: $scope.address,
            tel: $scope.tel,
            email: $scope.email,
            type: $scope.type
        });

        $scope.contacts = getContactList();
    };

    $scope.editContact = function(contact) {
        if (contact.newType) {
            contact.type = contact.newType;
        }

        delete contact.newType;
        ContactService.update(contact);
        $scope.contacts = getContactList();
        $scope.addType = false;
    };

    $scope.removeContact = function(contact) {
        ContactService.delete({
            id: contact._id
        });

        $scope.contacts = getContactList();
    };

    $scope.cancel = function() {
        $scope.contacts = getContactList();
        $scope.addType = false;
    };

    $scope.changeType = function(type) {
        if (!type) {
            $scope.addType = !$scope.addType;
        }
    };

    function getContactList() {
        return ContactService.query(function(contacts) {
            $scope.typeFilters = [];

            angular.forEach(contacts, function(contact) {
                if ($scope.typeFilters.indexOf(contact.type) < 0) {
                    $scope.typeFilters.push(contact.type);
                }
            });
        });
    }
}]).
controller('ContactController', ['$scope', '$routeParams', 'ContactService', function($scope, $routeParams, ContactService) {
    $scope.contact = ContactService.get({
        id: $routeParams.id
    });
}]);