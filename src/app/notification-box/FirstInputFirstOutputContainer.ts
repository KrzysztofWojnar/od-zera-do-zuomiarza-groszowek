/*
@Author:Krzysztof Wojnar
@email: krzysztofwojnar@outlook.com
@licenceL Public-domain software
*/
export class FirstInputFirstOutputContainer {
    private container: any = [];
    public getLength(): Number {
        return this.container.length;
    }
    public getElement(): any {
        //let logInfo = this.container.length - 1;
        //console.log("pozostalo w poczekalni: " + logInfo);
        return this.container.shift();
    }

    public addElement(element): number {
        /* console.log("poczekalnia: "+this.container.length+"+1"); */
        return this.container.push(element);
    }
}