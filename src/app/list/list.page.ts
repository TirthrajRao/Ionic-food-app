import { Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';




@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  todo : FormGroup;
   arr = [];
  constructor( public formBuilder: FormBuilder, private storage: Storage,  public alertController: AlertController) {
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      number: ['',Validators.required],
      uniqueKey: ['']
    });



  }

  ngOnInit() {
    this.storage.get('data').then((data) => {
     console.log("type ====>" , typeof data);
      // if(typeof data != 'object')
        this.arr = data;
      console.log("Storage data", data);
    }).catch(err => {
      console.error(err);
    });
  }

 async logForm(data){
   if(this.arr == null){
     data.value.uniqueKey = 1
     this.arr = [];
   }
   else{
     console.log("this .arr in else ======>" , this.arr);
     var tempLength = this.arr.length -1;
     console.log("templength of food", tempLength);
     var tempData = this.arr[tempLength];
     console.log("temp data of fodddddd", tempData);
     data.value.uniqueKey = tempData.uniqueKey + 1 ;
   }
   this.arr.push(data.value)
   const alert = await this.alertController.create({
    header: 'Thanks',
    // subHeader: ' Subtitle',
    message: 'Your Item Added Successfully ',
    buttons: ['ok']
  })
  await alert.present();
  this.todo.reset();
    console.log(this.arr)
    return this.storage.set("data", this.arr);
  }
}