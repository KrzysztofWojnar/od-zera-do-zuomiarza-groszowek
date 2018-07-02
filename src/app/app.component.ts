import { Component } from '@angular/core';
import { Human } from './Objects/Human';
import { Clicker } from './Objects/clicker-core';
import { InvestmentsComponent } from './investments/investments.component'
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
  
  public clicker: Clicker;
  constructor() {
    this.human = new Human();
    this.clicker = new Clicker();
  }
}