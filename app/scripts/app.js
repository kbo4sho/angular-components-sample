'use strict';

/**
 * @ngdoc overview
 * @name li-photos
 * @description
 * # li-photos
 *
 * Main module of the application.
 */
angular
  .module('li-photos', [
    'ngAnimate',
    'ngSanitize',
    'ui.router'
  ]).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        template: '<main></main>'
      })
      .state('main.grid', {
        url: '/',
        parent: 'main',
        views: {
          'content@main': {
            template: '<grid selected-photo="selectedPhoto" photos="photos" on-thumbnail-clicked="$ctrl.thumbnailClicked($event)"></grid>'
          }
        }
      })
      .state('main.card', {
        url: '/detail',
        parent: 'main',
        views: {
          'content@main': {
            template: '<grid photos="photos"></grid>'
          },
          'overlay@main': {
            template: '<card photo="selectedPhoto" on-description-save="$ctrl.descriptionSave($event)"></card>'
          }
        }
      });

  });
