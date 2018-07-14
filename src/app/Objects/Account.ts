export class Account {
    public static cash: number = 0;
    constructor () {
        Account.getResoult();
    }
    public static getResoult(): String {
        console.log (Account.cash+" (getResoult signal)");
        return Account.cash.toString();
    }
    public static setAccount (value) {
/*          console.log (Account.cash+" (setter signal)"); */
        Account.cash = value;
        return;
    }
    public static getAccount (): number {
/*                 console.log (Account.cash + " (getter signal)"); */
        return Account.cash;
    }
}