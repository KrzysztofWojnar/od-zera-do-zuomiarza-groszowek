import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoCashAlertComponent } from './no-cash-alert/no-cash-alert.component';
import { InvestmentsComponent } from './investments/investments.component';


@NgModule({
  declarations: [
    AppComponent,
    NoCashAlertComponent,
    InvestmentsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
