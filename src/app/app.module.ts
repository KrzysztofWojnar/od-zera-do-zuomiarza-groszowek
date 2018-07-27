import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NoCashAlertComponent } from './no-cash-alert/no-cash-alert.component';
import { InvestmentsComponent } from './investments/investments.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationBoxComponent } from './notification-box/notification-box.component';
import { NotificationComponent } from './notification-box/notification/notification.component';
import { KeysPipe } from './keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NoCashAlertComponent,
    InvestmentsComponent,
    NotificationBoxComponent,
    NotificationComponent,
    KeysPipe,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
