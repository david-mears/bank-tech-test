'use strict';
describe('Transaction', function() {
  beforeEach(function() {
    jasmine.clock().install;
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should initialize with balanceChange=argument', function() {
    const transaction1 = new Transaction(100);
    expect(transaction1.balanceChange).toEqual(100);
    const transaction2 = new Transaction(-100);
    expect(transaction2.balanceChange).toEqual(-100);
  });

  it('should initialize with balanceSoFar undefined', function() {
    const transaction1 = new Transaction(100);
    expect(transaction1.balanceSoFar).toEqual(undefined);
    const transaction2 = new Transaction(-100);
    expect(transaction2.balanceSoFar).toEqual(undefined);
  });

  it('should record the date when it is created', function() {
    const date1 = new Date(2019, 1, 10);
    const date2 = new Date(2019, 1, 13);
    const date3 = new Date(2019, 1, 14);
    jasmine.clock().mockDate(date1);
    const transaction1 = new Transaction(10);
    expect(transaction1.date).toEqual(date1);
    jasmine.clock().mockDate(date2);
    const transaction2 = new Transaction(0);
    expect(transaction2.date).toEqual(date2);
    jasmine.clock().mockDate(date3);
    const transaction3 = new Transaction(-900);
    expect(transaction3.date).toEqual(date3);
  });
});
