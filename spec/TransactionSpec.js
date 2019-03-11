describe('Transaction', function() {

  beforeEach(function() {
    jasmine.clock().install;
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should accept an argument x and initialize with balanceChange=x', function() {
    let transaction1 = new Transaction(100);
    expect(transaction1.balanceChange).toEqual(100);
    let transaction2 = new Transaction(-100);
    expect(transaction2.balanceChange).toEqual(-100);
  });

  it('should record the date when it is created', function() {
    let date1 = new Date(2019, 1, 10);
    let date2 = new Date(2019, 1, 13);
    let date3 = new Date(2019, 1, 14);
    jasmine.clock().mockDate(date1);
    let transaction1 = new Transaction(10);
    expect(transaction1.date).toEqual(date1);
    jasmine.clock().mockDate(date2);
    let transaction2 = new Transaction(0);
    expect(transaction2.date).toEqual(date2);
    jasmine.clock().mockDate(date3);
    let transaction3 = new Transaction(-900);
    expect(transaction3.date).toEqual(date3);
  });
});
