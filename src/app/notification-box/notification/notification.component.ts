import { Component, OnInit, Input } from '@angular/core';
import { Alert } from '../alert';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'})
export class NotificationComponent implements OnInit {
  @Input() alert: Alert;
  private isVisible: boolean;
  constructor() {
    this.isVisible = true;
  }
  hide () {
    this.isVisible = false;
  }
  getAlert():Alert {
    return this.alert;
  }
  ngOnInit() {
  }

}
