export class FirstInputFirstOutputContainer<T> {
    constructor() {

     }
    private  container: T[] = [];
    public getLength(): Number {
        return this.container.length;
    }
    public getElement(): T {
        let logInfo = this.container.length - 1;
        console.log("pozostalo w poczekalni: " + logInfo);
        return this.container.shift();
    }

    public addElement(element): number {
        /* console.log("poczekalnia: "+this.container.length+"+1"); */
        return this.container.push(element);
    }
}