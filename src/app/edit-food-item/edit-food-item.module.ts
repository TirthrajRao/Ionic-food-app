import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditFoodItemPage } from './edit-food-item.page';

const routes: Routes = [
  {
    path: '',
    component: EditFoodItemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditFoodItemPage]
})
export class EditFoodItemPageModule {}
