import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OdZeraDoZuomiarzaGroszowekComponent } from './od-zera-do-zuomiarza-groszowek/od-zera-do-zuomiarza-groszowek.component';

@NgModule({
  declarations: [
    AppComponent,
    OdZeraDoZuomiarzaGroszowekComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
