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
    bank.openAccount(MockTransactionConstructor);
    expect(bank.accounts.length).toEqual(1);
  });
});
