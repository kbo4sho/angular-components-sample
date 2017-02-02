'use strict';

describe('Componant: CardCtrl', function () {

  beforeEach(module('li-photos'));

  var CardComponentCtrl;

  beforeEach(inject(function ($controller) {
    CardComponentCtrl = $controller('cardComponentCtrl', {
    });
  }));

  it('should have a function name saveDescription', function () {
    expect(CardComponentCtrl.saveDescription).toBeDefined();
  });
});
