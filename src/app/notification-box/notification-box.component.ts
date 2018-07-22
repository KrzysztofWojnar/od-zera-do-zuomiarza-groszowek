import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';


enum alertTypeEnumeration {
  "alert alert-success",
  "alert alert-info",
  "alert alert-warning",
  "alert alert-danger",
  "alert alert-light"
}
/* var zmienna = 0; */
/* console.log(alertTypeEnumeration[zmienna]); */

@Component({
  selector: 'app-notification-box',
  templateUrl: './notification-box.component.html',
  styleUrls: ['./notification-box.component.css']
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

  public static addNotification(alert: any, alertType: any) {
    if (NotificationBoxComponent.notifications === undefined) {
      NotificationBoxComponent.notifications = [];
      console.log("funkcja");
    }
    alertType = alertTypeEnumeration[alertType];
    NotificationBoxComponent.notifications.push([alert,alertType]);
    /* console.log([alert,alertType]); */
  }
}
