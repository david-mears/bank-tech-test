/**
 * @constructor
 */
function Statement() {}

Statement.prototype.precise = function(number) {
  return Number.parseFloat(number).toFixed(2);
};

Statement.prototype.display = function(account) {
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

Statement.prototype.combine = function(statement) {
  let i;
  for (i = 0; i < statement.length; i++) {
    statement[i] = statement[i].join(' || ').split('  ').join(' ');
  };
  return statement.join('\n');
};

Statement.prototype.precise = function(number) {
  return Number.parseFloat(number).toFixed(2);
};

Statement.prototype.dateDisplay = function(date) {
  return moment(date).format('DD/MM/YYYY');
};

Statement.prototype.creditOrDebitDisplay = function(transaction) {
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
