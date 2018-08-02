/*
@Author:Krzysztof Wojnar
@email: krzysztofwojnar@outlook.com
@licenceL Public-domain software
*/
import { NoCashAlertComponent } from './no-cash-alert.component';

export class NoCashAlertEventCaller {
    /* Klasa odpowiada za inicjalizowanie wielu warningów */
    warnings: number;
  warningsArray:Array<NoCashAlertComponent>;
  warningsNumber: number=10;

}