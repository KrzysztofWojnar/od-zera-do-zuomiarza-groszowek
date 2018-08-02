/*
@Author:Krzysztof Wojnar
@email: krzysztofwojnar@outlook.com
@licenceL Public-domain software
*/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alert } from '../alert';
import { NotificationBoxComponent } from '../notification-box.component';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit {
  @Input() alert: Alert;
  @Output() deleteEmitter: EventEmitter<Alert> = new EventEmitter<Alert>();
  private isVisible: boolean;
  private timer;
  private notificationClass: string = "notificationOnHover";
  constructor() {
    setTimeout(() => this.notificationChangeClassWhenMauseIsAway(), 0);
    this.isVisible = true;
    this.timerStart();
  }
  /* Getters */
  getAlert(): Alert {
    return this.alert;
  }
  /* Entering and leaving notification's area with linked effects */
  private mouseEnter() {
    this.notificationChangeClassToOnHover();
    this.timerStop();
  }
  private mouseLeave() {
    this.notificationChangeClassWhenMauseIsAway();
    this.timerStart();
  }
  /* Notification's class changing */
  notificationChangeClassToOnHover() {
    this.notificationClass = "notificationOnHover";
  }
  notificationChangeClassWhenMauseIsAway() {
    this.notificationClass = "notification";
  }

  /* Notification's delaying */
  hide() {
    this.isVisible = false;
    this.deleteEmitter.emit (this.alert);
  }
   /* Timer operating */
  private timerStart() {
    this.timer = setTimeout(() => this.hide(), 3000);
    /* this.notificationChangeClassWhenMauseIsAway(); */
  }
  private timerStop() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  ngOnInit() {
  }

}
