import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';
import { alertTypeEnumeration, Alert } from './alert';



@Component({
  selector: 'app-notification-box',
  templateUrl: './notification-box.component.html'
})

export class NotificationBoxComponent implements OnInit {
  public enum;
  public index: number;
  private static notificationsOld: any[];
  private static notifications = {NotificationBoxComponent.index: Alert};
  getNotifications(): any[] {
    return NotificationBoxComponent.notificationsOld;
  }
  constructor() {
    NotificationBoxComponent.notificationsOld = [];
    NotificationBoxComponent.notifications = {index: Alert};

  }

  ngOnInit() {
  }

  public static addNotification(alert: Alert) {
    if (NotificationBoxComponent.notificationsOld === undefined) {
      NotificationBoxComponent.notificationsOld = [];
      console.log("funkcja");
    }
    NotificationBoxComponent.notificationsOld.push(alert);
    /* console.log([alert,alertType]); */
  }
}
