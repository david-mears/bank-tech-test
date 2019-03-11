'use strict';

describe('Bank', function() {
  let bank;

  beforeEach(function() {
    bank = new Bank;
  });

  it('contains an array of accounts', function() {
    expect(bank.accounts.length).toEqual(0);
  });
});
