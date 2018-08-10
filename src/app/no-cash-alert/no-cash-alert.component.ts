/*
@Author:Krzysztof Wojnar
@email: krzysztofwojnar@outlook.com
@licenceL Public-domain software
*/
import { Component, OnInit } from '@angular/core';
import { NotificationBoxComponent } from '../notification-box/notification-box.component';

@Component({
  selector: 'app-no-cash-alert',
  templateUrl: './no-cash-alert.component.html'
})
export class NoCashAlertComponent implements OnInit {
  public static isVisible: Boolean;

  constructor() {
    NoCashAlertComponent.isVisible = false;
/*     for (let i=0; i<=10; i++) { */
    /* } */
  }
  close() {
    NoCashAlertComponent.isVisible = false;
  }
  ngOnInit() {
  }
  getVisible(): Boolean {
    return NoCashAlertComponent.isVisible;
  }

}