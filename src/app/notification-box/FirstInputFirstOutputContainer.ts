export class FirstInputFirstOutputContainer {
    constructor() { }
    private container: any = [];
    public getElement(): any {
        return this.container.shift();
    }
    public addElement(element):number {
        console.log(this.container);
        return this.container.push(element);
    }
}