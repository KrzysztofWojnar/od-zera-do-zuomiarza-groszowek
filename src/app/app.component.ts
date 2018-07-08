import { Component } from '@angular/core';
import { Clicker } from './Objects/clicker-core';
import { Account } from './Objects/Account';
import { Button } from 'protractor';
import { generate } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Od zera do zuomiarza groszówek';
  account: Object;
  
  public clicker: Clicker;
  constructor() {
    this.clicker = new Clicker();
    this.account = new Account();
  }
}

setInterval(() => console.log("pomocy"), 1000);
