import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { IncomeEntity } from '../Objects/IncomeEntity';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent extends IncomeEntity {
  constructor() {
    super();
    setInterval(() => this.onEvent(), 1000);
    setInterval(() => this.upgrade(), 2500);
  }
  upgradeCost = 12 ;
  income = 2;
  upgradeValue = 10;


}
