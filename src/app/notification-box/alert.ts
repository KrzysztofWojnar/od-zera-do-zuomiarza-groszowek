/*
@Author:Krzysztof Wojnar
@email: krzysztofwojnar@outlook.com
@licenceL Public-domain software
*/
import { UUID } from 'angular2-uuid';

export enum alertTypeEnumeration {
    SUCCES =  "alert alert-success",
    INFO = "alert alert-info" ,
    WARNING = "alert alert-warning",
    DANGER = "alert alert-danger",
    LIGHT = "alert alert-light"
}
export class Alert {
    private index: string;
    constructor (
        private alertMessage: string,
        private alertType: alertTypeEnumeration,
        ) {
            this.index = UUID.UUID();
    }
    
    getIndex (): string{
        return this.index;
    }
    getMessage ():string {
        return this.alertMessage;
    }
    getType ():alertTypeEnumeration {
        return this.alertType;
    }
}
