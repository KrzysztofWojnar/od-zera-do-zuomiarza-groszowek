import { NoCashAlertComponent } from "../no-cash-alert/no-cash-alert.component";
import { Account } from '../Objects/Account';

export class IncomeEntity {
    income: number;
    upgradeCost: number;
    incomeTemp: number;
    isUpgradeable(myCash):boolean {
        return this.upgradeCost<=myCash;
    }
    upgrade () {
         if (Account.cash >= this.upgradeCost) {
            this.incomeTemp = this.income;
            this.income = this.upgradeCost;
            this.onEvent();
            this.income = this.incomeTemp + 1;
          } else {
            NoCashAlertComponent.isVisible = true;
         }
    }
    onEvent () {
        Account.cash += Account.cash + this.income;
        return Account.getResoult();
    }
}