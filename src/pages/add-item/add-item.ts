
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  name: string;
  description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  saveItem(){

    let newItem = {
      name: this.name,
      description: this.description
    };
    
    if(this.name != '' && this.description != ''){
      this.view.dismiss(newItem);
    }
  }

  close(){
    this.view.dismiss();
  }

}
