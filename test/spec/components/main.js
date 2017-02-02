'use strict';

describe('Componant: MainCtrl', function () {

  beforeEach(module('li-photos'));

  var MainComponentCtrl,
      scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainComponentCtrl = $controller('mainComponentCtrl', {
      $scope: scope
    });
  }));

  it('should have a function name thumbnailClicked', function () {
    expect(MainComponentCtrl.thumbnailClicked).toBeDefined();
  });

  it('should have a function name descriptionSave', function () {
    expect(MainComponentCtrl.descriptionSave).toBeDefined();
  });
});
