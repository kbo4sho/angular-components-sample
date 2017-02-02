'use strict';

/**
 * @ngdoc function
 * @name card.component
 * @description full detail view of an item with interactions
 * Card Component
 */

angular.module('li-photos').controller('cardComponentCtrl', function () {
    this.saveDescription = function () {
        this.onDescriptionSave({
            $event: {
                photo: this.photo
            }
        });
    };
});




angular.module('li-photos').component(
    'card',
    {
        restrict: 'E',
        bindings: {
            photo: '<',
            onDescriptionSave: '&'
        },
        templateUrl: 'scripts/components/card.component.html',
        controller: 'cardComponentCtrl'
    });