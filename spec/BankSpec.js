'use strict';

describe('Bank', function() {
  let bank;

  beforeEach(function() {
    bank = new Bank;
    bank.openAccount();
    jasmine.clock().install;
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('contains an array of accounts', function() {
    let newBank = new Bank;
    expect(newBank.accounts.length).toEqual(0);
  });

  it('creates a new account with #openAccount', function() {
    const date = new Date(2017, 1, 1);
    jasmine.clock().mockDate(date);
    bank.accounts[0].deposit(50);
    expect(bank.accounts[0].history.length).toEqual(1);
    expect(bank.accounts[0].history[0].date).toEqual(date);
  });

  it('displays dates in history of an account in reverse order', function() {

  });
});
