import { NoCashAlertComponent } from "../no-cash-alert/no-cash-alert.component";
import { Account } from '../Objects/Account';

export class IncomeEntity {
    income: number;
    upgradeCost: number;
    incomeTemp: number;
    constructor () {
        this.income = this.income
    }
    isUpgradeable(myCash):boolean {
        return this.upgradeCost<=myCash;
    }
    getIncome (): number {
        console.log (this.income);
        return this.income;
    }
    upgrade () {
         if (Account.getAccount () >= this.upgradeCost) {
            this.incomeTemp = this.income;
            this.income = this.upgradeCost;
            this.onEvent();
            this.income = this.incomeTemp + 1;
          } else {
            NoCashAlertComponent.isVisible = true;
         }
    }
    onEvent () {
        Account.setAccount (Account.getAccount () + this.income);
/*         console.log (this.income.toString());
        console.log (Account.getAccount()); */
        return;

    }
}