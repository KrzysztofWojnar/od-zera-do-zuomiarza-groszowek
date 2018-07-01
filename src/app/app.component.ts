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
  counting: Counting;
  constructor() {
    this.human = new Human();
    this.counting = new Counting();
  }
}
var account = 0;
var clickValue = 1;
export class Counting {
  account: String = account.toString();
  clickValue: Number = 1;
  Click() {
    account = account + clickValue;
    this.account = account.toString();
    return(account);
  }
  constructor () {
    this.account = account.toString();
    this.clickValue = clickValue;

  }
};
