'use strict';

describe('Acceptance Criteria', function() {

  beforeEach(function() {
    jasmine.clock().install;
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('Acceptance Criteria', function() {
    let clientAccount = new ClientAccount;
    let statement = new Statement;
    // Months are zero-based in JS.
    const date1 = new Date(2012, 0, 10);
    const date2 = new Date(2012, 0, 13);
    const date3 = new Date(2012, 0, 14);
    jasmine.clock().mockDate(date1);
    clientAccount.deposit(1000);
    jasmine.clock().mockDate(date2);
    clientAccount.deposit(2000);
    jasmine.clock().mockDate(date3);
    clientAccount.withdraw(500);
    /* eslint-disable max-len */
    expect(
        statement.display(clientAccount)
    ).toEqual(
        'date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00'
    );
    /* eslint-enable max-len */
  });
});
