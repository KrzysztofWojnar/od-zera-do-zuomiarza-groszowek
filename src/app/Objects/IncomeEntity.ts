import { NoCashAlertComponent } from "../no-cash-alert/no-cash-alert.component";
import { Account } from '../Objects/Account';
import { NotificationBoxComponent } from "../notification-box/notification-box.component";

export class IncomeEntity {
    className: string;
    income: number;
    upgradeCost: number;
    incomeTemp: number;
    upgradeValue: number;
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
    public upgrade () {
        console.log("upgrade!"+this.className);
         if (Account.getCash () >= this.upgradeCost) {
            this.incomeTemp = this.income;
            this.income = -this.upgradeCost;
            this.onEvent();
            this.income = this.incomeTemp + this.upgradeValue;
          } else {
            NotificationBoxComponent.addNotification("Nie masz pieniędzy!", 2);
            NoCashAlertComponent.isVisible = true;
         }
    }
    onEvent () {
        Account.setCash (Account.getCash () + this.income);
/*         console.log (this.income.toString());
        console.log (Account.getAccount()); */
        return;

    }
}
