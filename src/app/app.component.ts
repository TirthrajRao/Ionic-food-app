import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import   from ''

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})


// const routes: Routes = [
// {path:'login',
//     component:LoginComponent}

// ]


export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Add',
      url: '/list',
      icon: 'add'
    }, 
    {
      title: 'ViewItem',
      url: '/view-item',
      icon: 'eye'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
