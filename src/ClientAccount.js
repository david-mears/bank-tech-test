'use strict';

/**
 * @constructor
 */
function ClientAccount(transactionConstructor = Transaction) {
  this.history = [];
  this.transactionConstructor = transactionConstructor;
}

ClientAccount.prototype.deposit = function(amount) {
  /* eslint-disable new-cap */
  const transaction = new this.transactionConstructor(amount);
  /* eslint-enable new-cap */
  this.history.push(transaction);
};

ClientAccount.prototype.withdraw = function(amount) {
  this.deposit(-amount);
};

ClientAccount.prototype.balance = function(amount) {
  let balance = 0;
  let i;
  for (i = 0; i < this.history.length; i++) {
    balance += this.history[i].balanceChange;
  }
  return balance;
};
