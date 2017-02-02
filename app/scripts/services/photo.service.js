'use strict';

/**
 * @ngdoc function
 * @name photo.service
 * @description service for retriving photos from an api
 * Photo Service
 */

angular.module('li-photos')
    .factory('photoService', function ($q, $http) {

        var photoUrl = 'https://jsonplaceholder.typicode.com/photos';

        return {

            asyncGetPhotos: function () {
                return $q(function (resolve, reject) {
                    $http.get(photoUrl)
                        .success(function (data) {
                            resolve(data);
                        })
                        .error(function (status) {
                            reject(status);
                        });
                });
            }

        };

    });