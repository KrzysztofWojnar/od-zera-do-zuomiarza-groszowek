import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-notification-box',
  templateUrl: './notification-box.component.html',
  styleUrls: ['./notification-box.component.css']
})
export class NotificationBoxComponent implements OnInit {

  private static notifications: any[];

  constructor() {
    NotificationBoxComponent.notifications = [];
    for (let i=0; i<=10; i++) {
      NotificationBoxComponent.notifications.push(i);
    }
  }

  ngOnInit() {
  }

  static addNotification (alert:any) {
    NotificationBoxComponent.notifications.push(alert);
  }
}
