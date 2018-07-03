import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { Clicker } from '../Objects/clicker-core';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent {
  clicker: Clicker;
  investmentIncome: Number = 0;
  onInvestmentIncome () {
    this.clicker.count (this.investmentIncome); 
  }
  constructor() { }

  
}
