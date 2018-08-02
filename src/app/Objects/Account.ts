/*
@Author:Krzysztof Wojnar
@email: krzysztofwojnar@outlook.com
@licenceL Public-domain software
*/
export class Account {
    public static cash: number = 0;
    constructor () {
        this.getResoult();
    }
    public getResoult(): String {
        /* console.log (Account.cash+" (getResoult signal)"); */
        return Account.cash.toString();
    }
    public static setCash (value) {
/*          console.log (Account.cash+" (setter signal)"); */
        Account.cash = value;
        return;
    }
    public static getCash (): number {
/*                 console.log (Account.cash + " (getter signal)"); */
        return Account.cash;
    }
}