import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'})
export class NotificationComponent implements OnInit {
  @Input() alert: any;
  private isVisible: boolean;
  constructor() {
    this.isVisible = true;
  }
  hide () {
    this.isVisible = false;
  }
  
  ngOnInit() {
  }

}
