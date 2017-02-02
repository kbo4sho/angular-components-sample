'use strict';

/**
 * @ngdoc function
 * @name thumbnail.component
 * @description smaller view of an item used in a collection
 * Thumbnail Component
 */

angular.module('li-photos').controller('thumbnailComponentCtrl', function () {

    this.clicked = function () {
        this.onThumbnailClicked({
            $event: {
                photo: this.photo
            }
        });
    };
});

angular.module('li-photos').component(
    'thumbnail',
    {
        restrict: 'E',
        bindings: {
            photo: '<',
            onThumbnailClicked: '<'
        },
        templateUrl: 'scripts/components/thumbnail.component.html',
        controller: 'thumbnailComponentCtrl'
    });