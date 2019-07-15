import { Component,OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as _ from 'lodash';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  food;
  foodKey: any=[];
  foodItem:any;
  constructor(private storage: Storage, public alertController: AlertController) {}

  ngOnInit(){
    this.storage.get('data').then((data:any) => {
      // console.log("Storage data", data);
      this.food = data;
      console.log("mdi jaje kaik",this.food);
      this.foodKey = data.uniqueKey;
      console.log(this.foodKey);
    }).catch(err => {
      console.error(err);
    });
  }

  randomFood(){
    console.log("clickeble food itemssssssss");
    var x = Math.floor((Math.random() * this.food.length) + 1);
    console.log("================x value====================",x);
    _.forEach(this.food,(item)=>{
      if(item.uniqueKey == x){
        console.log("item==============>",item)
        this.foodItem = item;
        console.log("selceted fooditem =======>>>>", this.foodItem);
      }

    })



    
  }



}
