/*
@Author:Krzysztof Wojnar
@email: krzysztofwojnar@outlook.com
@licenceL Public-domain software
*/
import { Component, OnInit } from '@angular/core';
import { IncomeEntity } from '../Objects/IncomeEntity';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent extends IncomeEntity {
  upgradeCost = 100;
  income = 0;
  upgradeValue = 1;
  className = "Inwestycje";
  constructor() {
    super();
    setInterval(() => this.onEvent(), 1000);
    /* console.log(this.income);
    console.log(this.upgradeCost);
    console.log(this.upgradeValue); */
  }
}
