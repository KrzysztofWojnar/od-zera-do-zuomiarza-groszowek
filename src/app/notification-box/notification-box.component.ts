import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';
import { alertTypeEnumeration, Alert } from './alert';



@Component({
  selector: 'app-notification-box',
  templateUrl: './notification-box.component.html'
})

export class NotificationBoxComponent implements OnInit {
  public enum;
  public static index: Number = 0;
  private static notifications: Map<string, Alert> = new Map();
  getNotifications(): Map<string, Alert> {
    return NotificationBoxComponent.notifications;
  }
  constructor() {
  }

  ngOnInit() {
  }

  public static addNotification(alert: Alert) {
    if (NotificationBoxComponent.notifications === undefined) {
      NotificationBoxComponent.notifications = new Map();
      console.log("funkcja");
    }
    NotificationBoxComponent.notifications.set( NotificationBoxComponent.index.toString() ,alert);
    NotificationBoxComponent.index =  new Number(NotificationBoxComponent.index.valueOf() + 1 );
    /* console.log([alert,alertType]); */
  }
}
