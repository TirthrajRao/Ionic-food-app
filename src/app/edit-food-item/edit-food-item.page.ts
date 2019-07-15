import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-food-item',
  templateUrl: './edit-food-item.page.html',
  styleUrls: ['./edit-food-item.page.scss'],
})
export class EditFoodItemPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  back(){
    console.log("click thay che ke nao");
  }
}
