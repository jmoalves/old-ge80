import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages/pages';
import { PatrulhaProvider, TorneioProvider, Settings } from '../providers/providers';

// @Component({
//   template: `<ion-menu [content]="content">
//     <ion-header>
//       <ion-toolbar>
//         <ion-title>Pages</ion-title>
//       </ion-toolbar>
//     </ion-header>

//     <ion-content>
//       <ion-list>
//         <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
//           {{p.title}}
//         </button>
//       </ion-list>
//     </ion-content>

//   </ion-menu>
//   <ion-nav #content [root]="rootPage"></ion-nav>`
// })
@Component({
  template: `
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Tutorial', component: 'TutorialPage' },
    { title: 'Welcome', component: 'WelcomePage' },
    { title: 'Tabs', component: 'TabsPage' },
    { title: 'Cards', component: 'CardsPage' },
    { title: 'Content', component: 'ContentPage' },
    { title: 'Login', component: 'LoginPage' },
    { title: 'Signup', component: 'SignupPage' },
    { title: 'Map', component: 'MapPage' },
    { title: 'Master Detail', component: 'ListMasterPage' },
    { title: 'Menu', component: 'MenuPage' },
    { title: 'Settings', component: 'SettingsPage' },
    { title: 'Search', component: 'SearchPage' },
    { title: 'Torneio', component: 'TorneioPage' }
  ]

  constructor(
    private platform: Platform,
    settings: Settings,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private patrulhaProvider: PatrulhaProvider,
    private torneioProvider: TorneioProvider) {
      this.patrulhaProvider.load();
      this.torneioProvider.load();
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
