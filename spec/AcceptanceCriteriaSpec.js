describe('Acceptance Criteria', function() {
  let clientAccount;

  beforeEach(function() {
    bank = new Bank;
    clientAccount = new ClientAccount();
    jasmine.clock().install;
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('Acceptance Criteria', function() {
    let date1 = new Date(2012, 1, 10);
    let date2 = new Date(2012, 1, 13);
    let date3 = new Date(2012, 1, 14);
    jasmine.clock().mockDate(date1);
    clientAccount.deposit(1000);
    jasmine.clock().mockDate(date2);
    clientAccount.deposit(2000);
    jasmine.clock().mockDate(date3);
    clientAccount.withdraw(500);
    expect(
        bank.statement(clientAccount)
    ).toEqual(
        "date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00"
    );
  });
});
