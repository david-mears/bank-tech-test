'use strict';

describe('Bank', function() {
  let bank;

  beforeEach(function() {
    jasmine.clock().install;
    function MockAccountConstructor() {}
    bank = new Bank(MockAccountConstructor);
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('contains an array of accounts', function() {
    const newBank = new Bank;
    expect(newBank.accounts.length).toEqual(0);
  });

  it('creates a new account with #openAccount', function() {
    function MockTransactionConstructor() {}
    expect(bank.accounts.length).toEqual(0);
    bank.openAccount(MockTransactionConstructor)
    expect(bank.accounts.length).toEqual(1);
  });

  describe('#precise', function() {
    it('returns things as strings to 2 sig figs', function() {
      expect(bank.precise(3)).toEqual('3.00');
      expect(bank.precise(0.03)).toEqual('0.03');
      expect(bank.precise(3000)).toEqual('3000.00');
    });
  });

  describe('#statement', function() {
    it('gathers info and displays it in the right way', function() {
      // mock account:
      //   has history:
      //     has transaction(s):
      //       has date, balanceSoFar, balanceChange (+/-)
      function MockTransactionConstructor() {
        this.date = new Date;
        this.balanceSoFar = '100'
        this.balanceChange = '200'
      }
      function MockAccountConstructor() {
        this.history = []
        const date1 = new Date(2000, 11, 25);
        jasmine.clock().mockDate(date1);
        this.history.push(new MockTransactionConstructor)
        const date2 = new Date(2001, 0, 1);
        jasmine.clock().mockDate(date2);
        let withdrawalTransaction = new MockTransactionConstructor
        withdrawalTransaction.balanceChange = -100
        this.history.push(withdrawalTransaction)
      }
      expect(
        bank.statement(new MockAccountConstructor)
      ).toEqual(
        'date || credit || debit || balance\n' +
        '01/01/2001 || || 100.00 || 100.00\n' +
        '25/12/2000 || 200.00 || || 100.00'
      )
    })
  })
});
