import { NoCashAlertComponent } from "../no-cash-alert/no-cash-alert.component";
import { IncomeEntity } from './IncomeEntity';

export class Clicker extends IncomeEntity {
  constructor() {
    super();
    this.account = this.account;
    this.clickValue = this.clickValue;

  }
  income = 1;
  clickValue = 1;
  upgradeValue = 1;
  account = 0;
  value = undefined;
  public count(value) {
    this.account = this.account + value;
    return (this.getResoult(this.account));
  }

  onClick() {
    this.count(this.clickValue);
    return (this.account);
  }
  getResoult(account): String {
    return (account.toString());
  }

  upgrade() {
    if (this.account > 9) {
      this.count(-10);
      this.clickValue = this.clickValue + 1;
    } else {
      NoCashAlertComponent.isVisible = true;
    }
  }
}