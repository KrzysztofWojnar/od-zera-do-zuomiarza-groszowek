var newAccount = 0;
var newClickValue = 1;
export class newCounting {
  newAccount: String = newAccount.toString();
  newClickValue: Number = 1;
  Click() {
    newAccount = newAccount + newClickValue;
    this.newAccount = newAccount.toString();
    return(newAccount);
  }
  constructor () {
    this.newAccount = newAccount.toString();
    this.newClickValue = newClickValue;

  }
};