import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard/user-statistics', icon: 'mail' },
    { title: 'Leads', url: '/dashboard/leads', icon: 'heart' },
    { title: 'Sample Data', url: '/dashboard/Sample-data', icon: 'document-text' },
    { title: 'Task', url: '/dashboard/task', icon: 'checkbox' },
    { title: 'Site Visit', url: '/dashboard/site-visit', icon: 'navigate' },
    { title: 'Analytics', url: '/folder/outbox', icon: 'stats-chart' },
    { title: 'Properties', url: '/dashboard/properties', icon: 'storefront' },
    { title: 'User Management', url: '/folder/trash', icon: 'person-circle' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private router: Router,
    private platform: Platform,
    private location: Location
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.handleBackButton();
    });
  }

  handleBackButton() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (this.router.url === '/dashboard/user-statistics') {
        App.exitApp();
      } else {
        this.location.back();
      }
    });
  }

  logout() {
    this.router.navigate(['login'])
  }

}
