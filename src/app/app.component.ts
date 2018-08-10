import { Component } from '@angular/core';
import { Clicker } from './Objects/clicker-core';
import { Account } from './Objects/Account';
import { HttpClient, HttpClientModule } from '@angular/common/http';
/* import {Utils} from './shared/utils'; */
import { ImportingData } from './shared/importing-data';



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
/*     const u: Utils = new Utils(); */
    const update: ImportingData = new ImportingData(this.http);
    update.importData(this.configUrl);
    this.account = new Account();
  }
}

