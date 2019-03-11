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

  describe('#deposit', function() {
    it('creates a new Transaction in history with correct data', function() {
      let date1 = new Date(2000, 12, 25);
      jasmine.clock().mockDate(date1);
      clientAccount.deposit(33);
      expect(clientAccount.history.length).toEqual(1)
      let transaction = clientAccount.history[0];
      expect(transaction.date).toEqual(date1);
      expect(transaction.balanceChange).toEqual(33);
    })
  })

});
