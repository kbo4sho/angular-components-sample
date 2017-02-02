'use strict';

/**
 * @ngdoc function
 * @name grid.component
 * @description used to display a collections of items
 * Grid Component
 */

angular.module('li-photos').component(
    'grid',
    {
        restrict: 'E',
        bindings: {
            photos: '<',
            onThumbnailClicked: '&'
        },
        templateUrl: 'scripts/components/grid.component.html'
        //No controller needed for this component.. great
    });