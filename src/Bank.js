'use strict';

/**
 * @constructor
 */
function Bank(accountConstructor = ClientAccount) {
  this.accounts = [];
  this.accountConstructor = accountConstructor;
}

Bank.prototype.openAccount = function(transactionConstructor = Transaction) {
  /* eslint-disable new-cap */
  const account = new this.accountConstructor(transactionConstructor);
  /* eslint-enable new-cap */
  this.accounts.push(account);
  return account;
};

Bank.prototype.statement = function(account) {
  const transactions = account.history.reverse();
  const statement = [['date', 'credit', 'debit', 'balance']];
  let i;
  for (i = 0; i < transactions.length; i++) {
    const creditOrDebitDisplay = this.creditOrDebitDisplay(transactions[i]);
    statement.push([
      this.dateDisplay(transactions[i].date),
      creditOrDebitDisplay[0],
      creditOrDebitDisplay[1],
      this.precise(transactions[i].balanceSoFar),
    ]);
  }
  return this.combine(statement);
};

Bank.prototype.combine = function(statement) {
  let i;
  for (i = 0; i < statement.length; i++) {
    statement[i] = statement[i].join(' || ').split('  ').join(' ');
  };
  return statement.join('\n');
};

Bank.prototype.precise = function(number) {
  return Number.parseFloat(number).toFixed(2);
};

Bank.prototype.dateDisplay = function(date) {
  return moment(date).format('DD/MM/YYYY');
};

Bank.prototype.creditOrDebitDisplay = function(transaction) {
  const creditOrDebit = [];
  if (transaction.balanceChange > 0) {
    creditOrDebit.push(this.precise(transaction.balanceChange));
    creditOrDebit.push('');
  } else if (transaction.balanceChange < 0) {
    creditOrDebit.push('');
    creditOrDebit.push(this.precise(-transaction.balanceChange));
  }
  return creditOrDebit;
};
