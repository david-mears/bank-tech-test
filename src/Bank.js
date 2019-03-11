'use strict';

/**
 * @constructor
 */
function Bank(accountConstructor = ClientAccount) {
  this.accounts = [];
  this.accountConstructor = accountConstructor;
}
