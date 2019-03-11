describe('Transaction', function() {

  it('should accept an argument x and initialize with balanceChange=x', function() {
    let transaction1 = new Transaction(100);
    expect(transaction1.balanceChange).toEqual(100);
    let transaction2 = new Transaction(-100);
    expect(transaction2.balanceChange).toEqual(-100);
  });
});
