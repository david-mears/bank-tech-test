'use strict';

/**
 * @constructor
 */
function ClientAccount(transactionConstructor = Transaction) {
  this.history = [];
  this.transactionConstructor = transactionConstructor;
}

ClientAccount.prototype.deposit = function(amount) {
  let transaction = new this.transactionConstructor(amount);
  this.history.push(transaction);
}

ClientAccount.prototype.withdraw = function(amount) {
  this.deposit(-amount);
}
