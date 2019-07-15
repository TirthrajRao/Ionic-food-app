import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { ListPage } from './list.page';
// import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule , FormsModule,
    
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ])
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
