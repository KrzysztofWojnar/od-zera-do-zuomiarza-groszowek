import { Component } from '@angular/core';
import { Clicker } from './Objects/clicker-core';
import { Account } from './Objects/Account';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Utils} from './shared/utils';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Od zera do zuomiarza groszówek';
  account: Object;

  public clicker: Clicker;
  configUrl = 'http://192.168.43.46:5000/';


  constructor(private http: HttpClient) {
    this.clicker = new Clicker();
    this.account = new Account();
    const u: Utils = new Utils(this.http);
    u.showConfig(this.configUrl);
  }
}

