import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-notification-box',
  templateUrl: './notification-box.component.html',
  styleUrls: ['./notification-box.component.css']
})
export class NotificationBoxComponent implements OnInit {

  private static notifications: any[];
  getNotifications():any[]{
return NotificationBoxComponent.notifications;
  }
  constructor() {
    NotificationBoxComponent.notifications = [];

  }

  ngOnInit() {
  }

  public static addNotification(alert: any) {
    if (NotificationBoxComponent.notifications === undefined) {
      NotificationBoxComponent.notifications = [];
    }
    NotificationBoxComponent.notifications.push(alert);
  }
}
