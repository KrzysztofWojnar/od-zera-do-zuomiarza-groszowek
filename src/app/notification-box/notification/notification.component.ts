import { Component, OnInit, Input } from '@angular/core';
import { Alert } from '../alert';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit {
  @Input() alert: Alert;
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
  }
   /* Timer operating */
  private timerStart() {
    this.timer = setTimeout(() => this.isVisible = false, 3000);
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
