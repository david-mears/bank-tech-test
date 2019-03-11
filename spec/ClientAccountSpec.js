'use strict';
describe('ClientAccount', function() {
  let clientAccount;

  beforeEach(function() {
    jasmine.clock().install;
    clientAccount = new ClientAccount();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('initializes with empty list of transactions', function() {
    expect(clientAccount.history).toEqual([]);
  });

  describe('#deposit', function() {
    it('creates a new Transaction in history with correct data', function() {
      const date = new Date(2000, 12, 25);
      jasmine.clock().mockDate(date);
      clientAccount.deposit(33);
      expect(clientAccount.history.length).toEqual(1);
      const transaction = clientAccount.history[0];
      expect(transaction.date).toEqual(date);
      expect(transaction.balanceChange).toEqual(33);
    });
  });

  describe('#withdraw', function() {
    it('creates a new Transaction in history with correct data', function() {
      const date = new Date(2007, 7, 7);
      jasmine.clock().mockDate(date);
      clientAccount.withdraw(5);
      expect(clientAccount.history.length).toEqual(1);
      const transaction = clientAccount.history[0];
      expect(transaction.date).toEqual(date);
      expect(transaction.balanceChange).toEqual(-5);
    });
  });

  describe('#balance', function() {
    it('tots up all withdrawals and deposits in history', function() {
      clientAccount.deposit(5);
      clientAccount.deposit(500);
      clientAccount.withdraw(5);
      clientAccount.withdraw(5);
      clientAccount.deposit(5);
      clientAccount.withdraw(5);
      clientAccount.deposit(5);
      expect(clientAccount.balance()).toEqual(5+500-5-5+5-5+5);
    });
  });
});
