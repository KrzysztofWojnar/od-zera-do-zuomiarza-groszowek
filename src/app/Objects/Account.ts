export class Account {
    public static cash: number = 0;
    public static getResoult(): String {
        return Account.cash.toString();
    }
    public static setAccount (value) {
        Account.cash = value;
        return;
    }
    public static checkAccount (): number {
        return Account.cash;
    }
}