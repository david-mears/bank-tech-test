'use strict';

/**
 * @constructor
 */
function Bank(accountConstructor = ClientAccount) {
  this.accounts = [];
  this.accountConstructor = accountConstructor;
}

Bank.prototype.openAccount = function(transactionConstructor = Transaction) {
  let account = new this.accountConstructor(transactionConstructor);
  this.accounts.push(account)
}
