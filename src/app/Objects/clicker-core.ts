/*
@Author:Krzysztof Wojnar
@email: krzysztofwojnar@outlook.com
@licenceL Public-domain software
*/
import { IncomeEntity } from './IncomeEntity';

export class Clicker extends IncomeEntity {
  constructor() {
    super();
  }
  upgradeCost = 10;
  income = 1;
  upgradeValue = 1;
  className = "Clicker";
}