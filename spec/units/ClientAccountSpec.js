'use strict';
describe('ClientAccount', function() {
  let clientAccount;
  let transaction1;
  let transaction2;

  beforeEach(function() {
    jasmine.clock().install;
    // I couldn't find a way to mock the properties of instances in JS,
    // so here is a constructor function I made for this purpose.
    function MockTransactionConstructor() {
      this.balanceChange = 300
    }
    clientAccount = new ClientAccount(MockTransactionConstructor)
    transaction1 = new MockTransactionConstructor;
    transaction2 = new MockTransactionConstructor;
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('initializes with empty list of transactions', function() {
    let newClientAccount = new ClientAccount(
      'argument to block default dependency injection'
    );
    expect(newClientAccount.history).toEqual([]);
  });

  describe('#balance', function() {
    it('tots up all balanceChange attributes in history array', function() {
      clientAccount.history.push(transaction1)
      clientAccount.history.push(transaction2)
      expect(clientAccount.balance()).toEqual(600)
    });
  });

  // further deposit functionality is tested in the integration spec
  describe('#deposit', function() {
    it('creates a new TransactionConstructor in history, with a balance', function() {
      spyOn(clientAccount, 'balance').and.returnValue(1000)
      clientAccount.deposit(1)
      expect(clientAccount.history.length).toEqual(1);
      const transaction = clientAccount.history[0];
      expect(transaction.balanceSoFar).toEqual(1000);
    });
  });

// further withdraw functionality is tested in the integration spec
  describe('#withdraw', function() {
    it('creates a new TransactionConstructor in history, with a balance', function() {
      spyOn(clientAccount, 'balance').and.returnValue(1000)
      clientAccount.withdraw(1)
      expect(clientAccount.history.length).toEqual(1);
      const transaction = clientAccount.history[0];
      expect(transaction.balanceSoFar).toEqual(1000);
    });
  });
});
