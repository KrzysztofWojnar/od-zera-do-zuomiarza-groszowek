import { Component } from '@angular/core';
import { Clicker } from './Objects/clicker-core';
import { Account } from './Objects/Account';
import { Button } from 'protractor';
import { generate } from 'rxjs';
import { NoCashAlertComponent } from './no-cash-alert/no-cash-alert.component';
import { NotificationBoxComponent } from './notification-box/notification-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Od zera do zuomiarza groszówek';
  account: Object;
  
  public clicker: Clicker;
  constructor() {
    this.clicker = new Clicker();
    this.account = new Account();
  }
}

