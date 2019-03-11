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
};

Bank.prototype.statement = function(account) {
  let transactions = account.history.reverse()
  let statement = [['date','credit','debit','balance']]
  let i;
  for (i = 0; i < transactions.length; i++) {
    let transactionDisplay = [this.dateDisplay(transactions[i].date)];
    if (transactions[i].balanceChange > 0) {
      transactionDisplay.push(this.precise(transactions[i].balanceChange))
      transactionDisplay.push('')
    } else if (transactions[i].balanceChange < 0) {
      transactionDisplay.push('')
      transactionDisplay.push(this.precise(-transactions[i].balanceChange))
    }
    transactionDisplay.push(this.precise(transactions[i].balanceSoFar))
    statement.push(transactionDisplay)
  }
  for (i = 0; i < statement.length; i++) {
    statement[i] = statement[i].join(' || ').split('  ').join(' ')
  };
  return statement.join('\n');
}

Bank.prototype.precise = function(number) {
  return Number.parseFloat(number).toFixed(2);
}

Bank.prototype.dateDisplay = function(date) {
  return moment(date).format("DD/MM/YYYY");
}
