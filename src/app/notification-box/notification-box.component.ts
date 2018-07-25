import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';
import { alertTypeEnumeration, Alert } from './alert';



@Component({
  selector: 'app-notification-box',
  templateUrl: './notification-box.component.html'
})

export class NotificationBoxComponent implements OnInit {
  static notificationDying(): any {
    throw new Error("Method not implemented.");
  }
  public enum;
  private static notifications: Map<string, Alert> = new Map();
  getNotifications(): Map<string, Alert> {
    return NotificationBoxComponent.notifications;
  }
  constructor() {
  }

  ngOnInit() {
  }
  getKeys(map){
    return Array.from(map.keys());
  }
  public static addNotification(alert: Alert) {
    if (NotificationBoxComponent.notifications === undefined) {
      NotificationBoxComponent.notifications = new Map();
      console.log("funkcja");
    }
    NotificationBoxComponent.notifications.set(alert.getIndex(), alert);
    /* console.log(NotificationBoxComponent.notifications); */
  }

  onDeleteEmitter(alert: Alert) {
    return this.notificationDying(alert.getIndex());
  }
  /* Notification's delaying */
  notificationDying (key: string): boolean {
    return NotificationBoxComponent.notifications.delete(key);
  }
}
