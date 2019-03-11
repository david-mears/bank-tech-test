'use strict';
describe('ClientAccount', function() {
  var clientAccount;

  beforeEach(function() {
    jasmine.clock().install;
    clientAccount = new ClientAccount();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('initializes with empty list of transactions', function() {
    expect(clientAccount.history).toEqual([])
  });
});
