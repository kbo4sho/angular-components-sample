'use strict';

/**
 * @ngdoc function
 * @name main.component
 * @description top level component that wraps all others and holds the top level data
 * Main Component
 */

angular.module('li-photos').controller('mainComponentCtrl', function ($scope, photoService, $state, localStorageService) {

    var selectedPhotoIdKey = 'selectedPhotoId';

    photoService.asyncGetPhotos()
        .then(function (data) {
            $scope.photos = data.slice(0, 25);
        }, function (error) {
            console.error('issue with photo serivce: ', error);
        }).then(function () {
            var selectedPhotoId = Number(localStorageService.get(selectedPhotoIdKey));
            if (selectedPhotoId) {
                for (var i = 0; i < $scope.photos.length; i++) {
                    if ($scope.photos[i].id === selectedPhotoId) {
                        var photo = $scope.photos[i];
                        photo.description = localStorageService.get(photo.id);
                        $scope.selectedPhoto = photo;
                        break;
                    }
                }
            }
        });

    this.thumbnailClicked = function (event) {
        var photo = event.photo;
        localStorageService.set(selectedPhotoIdKey, photo.id);
        photo.description = localStorageService.get(photo.id);
        $scope.selectedPhoto = photo;
        $state.go('main.card');
    };

    this.descriptionSave = function (event) {
        localStorageService.set(event.photo.id, event.photo.description);
    };

});

angular.module('li-photos').component(
    'main',
    {
        restrict: 'E',
        templateUrl: 'scripts/components/main.component.html',
        controller: 'mainComponentCtrl',
    });