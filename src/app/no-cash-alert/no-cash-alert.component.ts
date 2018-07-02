import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-cash-alert',
  templateUrl: './no-cash-alert.component.html',
  styleUrls: ['./no-cash-alert.component.css']
})
export class NoCashAlertComponent implements OnInit {
  public static isVisible: Boolean;


  constructor() {
    NoCashAlertComponent.isVisible = false;
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
