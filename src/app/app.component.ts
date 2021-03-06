/*
@Author:Krzysztof Wojnar
@email: krzysztofwojnar@outlook.com
@licenceL Public-domain software
*/
import { Component } from '@angular/core';
import { Clicker } from './Objects/clicker-core';
import { Account } from './Objects/Account';
import { HttpClient, HttpClientModule } from '@angular/common/http';
/* import {Utils} from './shared/utils'; */
import { ImportingData } from './shared/importing-data';
import { Alert, alertTypeEnumeration } from './notification-box/alert';
import { NotificationBoxComponent } from './notification-box/notification-box.component';
/* import { ExportingData } from './shared/exporting-data'; */



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Od zera do zuomiarza groszówek';
  account: Object;

  public clicker: Clicker;
  static configUrl = 'http://192.168.43.46:5000/';
  investmentsIncome: number = 0;
  currentIncome(number: number) {
    if (number == -100) return;
    this.investmentsIncome = number; 
  }
  constructor(private http: HttpClient) {
    this.clicker = new Clicker();
/*     const u: Utils = new Utils(); */
    const update: ImportingData = new ImportingData(this.http);
    /* const send: ExportingData = new ExportingData(this.http); */
    update.importData(AppComponent.configUrl);
    this.account = new Account();
    let alert = new Alert("Kliknij na grosz!", alertTypeEnumeration.SUCCES);
    NotificationBoxComponent.addNotification(alert);
     
  }
}

