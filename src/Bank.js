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
