'use strict';

describe('Componant: ThumbnailCtrl', function () {

  beforeEach(module('li-photos'));

  var ThumbnailComponentCtrl;

  beforeEach(inject(function ($controller) {
    ThumbnailComponentCtrl = $controller('thumbnailComponentCtrl', {});
  }));

  it('should have a function name thumbnailClicked', function () {
    expect(ThumbnailComponentCtrl.clicked).toBeDefined();
  });

});
