'use strict';

describe('Statement', function() {

  describe('#display', function() {
    it('gathers info and displays it in the right way', function() {
      // mock account:
      //   has history:
      //     has transaction(s):
      //       has date, balanceSoFar, balanceChange (+/-)
      function MockTransactionConstructor() {
        this.date = new Date;
        this.balanceSoFar = '100';
        this.balanceChange = '200';
      }
      function MockAccountConstructor() {
        this.history = [];
        const date1 = new Date(2000, 11, 25);
        jasmine.clock().mockDate(date1);
        this.history.push(new MockTransactionConstructor);
        const date2 = new Date(2001, 0, 1);
        jasmine.clock().mockDate(date2);
        const withdrawalTransaction = new MockTransactionConstructor;
        withdrawalTransaction.balanceChange = -100;
        this.history.push(withdrawalTransaction);
      }
      let statement = new Statement();
      expect(
          statement.display(new MockAccountConstructor)
      ).toEqual(
          'date || credit || debit || balance\n' +
        '01/01/2001 || || 100.00 || 100.00\n' +
        '25/12/2000 || 200.00 || || 100.00'
      );
    });
  });

});
