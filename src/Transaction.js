'use strict';
/**
 * @constructor
 */
function Transaction(balanceChange) {
  this.balanceChange = balanceChange;
  this.date = new Date();
}
