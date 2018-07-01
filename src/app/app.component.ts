import { Component } from '@angular/core';
import { Human } from './Objects/Human';
import { Button } from 'protractor';
import { generate } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Od zera do zuomiarza groszówek';
  human: Human;
  //counting: Counting;
  upgrade: Upgrade;
  newCounting: NewCounting;
  constructor() {
    this.human = new Human();
  //  this.counting = new Counting();
    this.upgrade = new Upgrade();
    this.newCounting = new NewCounting();
  }
}
var account = 0;
var clickValue = 1;
/*
export class Counting {
  account: String = account.toString();
  clickValue: Number = 1;
  Click() {
    account = account + clickValue;
    this.account = account.toString();
    return (account);
  }
  constructor() {
    this.account = account.toString();
    this.clickValue = clickValue;

  }
};
*/
//  NOWY
var account1 = 0;
var clickValue1 = 1;
var upgradeValue = 1;

export class NewCounting {
  account1: String = account1.toString();
  clickValue1: Number = clickValue1;
  value = 1;
  Count(value) {
    account1 = account1 + value;
    this.account1 = account1.toString();
    return (account1);
  }
  Click() {
    this.Count(clickValue1);
    console.log("dziala");
    return (account1);
  }
  constructor() {
    this.account1 = account1.toString();
    this.clickValue1 = clickValue1;

  }
};
export class Upgrade {
  account1: Number = account1;
  clickValue1: Number = clickValue1;
  Click()
    if(account1 > 9) {
      account1 = account1 - 10;
      clickValue = clickValue + 1;
    }
  }