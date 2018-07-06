export class Account {
    public static cash: number = 0;
    public static getResoult(): String {
        return Account.cash.toString();
    }
}