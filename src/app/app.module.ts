import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { ListPage } from './list/list.page';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormGroup} from '@angular/forms';
import  {MyItemComponent} from './my-item/my-item.component';
// import {EditFoodItemComponent} from './edit-food-item/edit-food-item.component';
import { IonicStorageModule } from '@ionic/storage';


// import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MyItemComponent,
],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
