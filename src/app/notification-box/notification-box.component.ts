import { Component, OnInit } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';
import { alertTypeEnumeration, Alert } from './alert';
import { FirstInputFirstOutputContainer } from './FirstInputFirstOutputContainer';



@Component({
  selector: 'app-notification-box',
  templateUrl: './notification-box.component.html'
})

export class NotificationBoxComponent implements OnInit {
  static notificationBoxCapacity = 5;
  public enum;
  private static notifications: Map<string, Alert> = new Map();
  /* "notifications" getter */
  getNotifications(): Map<string, Alert> {
    return NotificationBoxComponent.notifications;
  }
  /* default (empty now) */
  constructor() {
  }
  ngOnInit() {
  }
  /* creating notif */
  public static addNotification(alert: Alert) {
    if (NotificationBoxComponent.notifications === undefined) {
      NotificationBoxComponent.notifications = new Map();
      console.log("something gone wrong");
    }
    NotificationBoxComponent.pushToQueue(alert);
    /* NotificationBoxComponent.notifications.set(alert.getIndex(), alert); */
    /* console.log(NotificationBoxComponent.notifications); */
  }
  getKeys(map) {
    return Array.from(map.keys());
  }
  /* Notification's delaying */
  onDeleteEmitter(alert: Alert) {
    this.notificationDying(alert.getIndex());
    this.queuer();
    return;
  }
  notificationDying(key: string): boolean {
    /*     this.queuer(); */
    return NotificationBoxComponent.notifications.delete(key);
  }
  static notificationDying(): any {
    throw new Error("Method not implemented.");
  }
  /* Visibility managing */
  getMapSize(map): number {
    return this.getKeys(map).length;
  }
  static fifocNotifications = new FirstInputFirstOutputContainer;
  static pushToQueue(alert) {
    /* console.log(Array.from(this.notifications.keys()).length); */
    if (Array.from(this.notifications.keys()).length >= NotificationBoxComponent.notificationBoxCapacity) {
      NotificationBoxComponent.fifocNotifications.addElement(alert)
    } else {
      NotificationBoxComponent.notifications.set(alert.getIndex(), alert);
    }
  }
  nullFunction () {
    return 0;
  }
  queuer() {
    if (NotificationBoxComponent.fifocNotifications.getLength () == 0) {
      console.log("poczekalnia pusta");
      return;
    } else {
      NotificationBoxComponent.pushToQueue(NotificationBoxComponent.fifocNotifications.getElement());
    return;
  }
  }
}
