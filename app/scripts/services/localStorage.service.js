'use strict';

/**
 * @ngdoc function
 * @name localStorage.service
 * @description service for storing key value pairs to local storage
 * LocalStorage Service
 */

angular.module('li-photos')
    .factory('localStorageService', function () {

        return {

            set: function (key, value) {
                return localStorage.setItem(key, value);
            },

            get: function (key) {
                return localStorage.getItem(key);
            }
            
        };

    });