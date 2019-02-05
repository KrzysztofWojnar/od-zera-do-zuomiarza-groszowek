/*
@Author:Krzysztof Wojnar
@email: krzysztofwojnar@outlook.com
@licenceL Public-domain software
*/
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IncomeEntity } from '../Objects/IncomeEntity';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent extends IncomeEntity {
  @Output() currentIncome = new EventEmitter<number>();
  upgradeCost = 100;
  income = 0;
  upgradeValue = 1;
  className = "Inwestycje";
  constructor() {
    super();
    this.currentIncome.emit(this.income);
    setInterval(() => this.onEvent(), 1000);
    /* console.log(this.income);
    console.log(this.upgradeCost);
    console.log(this.upgradeValue); */
  }
  onEvent () {
    super.onEvent();
    this.currentIncome.emit(this.income);
  }
  
  
}
