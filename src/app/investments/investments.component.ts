import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { Clicker } from '../Objects/clicker-core';
import { IncomeEntity } from '../Objects/IncomeEntity';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent extends IncomeEntity {
  constructor() {
    super();
  }
  investmentIncome: Number = 10;
  /* account = Clicker.globalAccount;
  onInvestmentIncome () {
    console.log("Twoja.stara");
    this.count (this.investmentIncome);
  }
  public count(value) {
    console.log(Clicker.globalAccount);
    this.account = this.account + value;
    return this.account;
  }
  constructor() {
    this.account = Clicker.globalAccount;
   } */


}
