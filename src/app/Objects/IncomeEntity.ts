import { NoCashAlertComponent } from "../no-cash-alert/no-cash-alert.component";
import { Account } from '../Objects/Account';
import { NotificationBoxComponent } from '../notification-box/notification-box.component';
import { Alert, alertTypeEnumeration } from "../notification-box/alert";

export class IncomeEntity {
    className: string;
    income: number;
    upgradeCost: number;
    incomeTemp: number;
    upgradeValue: number;
    constructor() {
        this.income = this.income
    }
    isUpgradeable(myCash): boolean {
        return this.upgradeCost <= myCash;
    }
    getIncome(): number {
        console.log(this.income);
        return this.income;
    }
    public upgrade() {
        let alert: Alert = null;
        console.log("upgrade!" + this.className);
        if (Account.getCash() >= this.upgradeCost) {
            this.incomeTemp = this.getIncome();
            this.income = -this.upgradeCost;
            this.onEvent();
            this.income = this.incomeTemp + this.upgradeValue;
            alert = new Alert("Ulepszenie wykupione!", alertTypeEnumeration.INFO);
        } else {
            NoCashAlertComponent.isVisible = true;
            alert = new Alert("Nie masz pieniędzy!", alertTypeEnumeration.WARNING);
        }
        NotificationBoxComponent.addNotification(alert);
    }
    onEvent() {
        Account.setCash(Account.getCash() + this.income);
        /*         console.log (this.income.toString());
                console.log (Account.getAccount()); */
        return;

    }
}
