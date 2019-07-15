import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';





@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.page.html',
  styleUrls: ['./view-item.page.scss'],
})
export class ViewItemPage implements OnInit {

  food;




  constructor( private storage: Storage, public alertController: AlertController, private router: Router) { }

  ngOnInit() {
  	  this.storage.get('data').then((data) => {
      // console.log("Storage data", data);
      this.food = data;
      console.log("mdi jaje kaik",this.food);
    }).catch(err => {
      console.error(err);
    });
  }



  editItem(data){
    console.log("click event",data);
    this.router.navigate(['/editfood'])
  }

}
