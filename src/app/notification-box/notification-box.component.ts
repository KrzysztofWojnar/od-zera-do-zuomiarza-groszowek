import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';
import { alertTypeEnumeration, Alert } from './alert';



@Component({
  selector: 'app-notification-box',
  templateUrl: './notification-box.component.html'
})

export class NotificationBoxComponent implements OnInit {
  public enum;
  private static notifications: any[];
  getNotifications(): any[] {
    return NotificationBoxComponent.notifications;
  }
  constructor() {
    NotificationBoxComponent.notifications = [];

  }

  ngOnInit() {
  }

  public static addNotification(alert: Alert) {
    if (NotificationBoxComponent.notifications === undefined) {
      NotificationBoxComponent.notifications = [];
      console.log("funkcja");
    }
    NotificationBoxComponent.notifications.push(alert);
    /* console.log([alert,alertType]); */
  }
}
