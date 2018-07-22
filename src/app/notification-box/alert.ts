export enum alertTypeEnumeration {
    SUCCES =  "alert alert-success",
    INFO = "alert alert-info" ,
    WARNING = "alert alert-warning",
    DANGER = "alert alert-danger",
    LIGHT = "alert alert-light"
}
export class Alert {
    constructor (
        private alertMessage: string,
        private alertType: alertTypeEnumeration) {
    }
    getMessage ():string {
        return this.alertMessage;
    }
    getType ():alertTypeEnumeration {
        return this.alertType;
    }
}
