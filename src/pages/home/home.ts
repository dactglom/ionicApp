import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
import { ItemDetailPage } from '../item-detail/item-detail';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<any>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public apiProvider: ApiProvider) {
    
    this.items = this.apiProvider.getTasks();
    
  }

  // ionViewDidLoad(){

  // }

  addItem(){

    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {

      if(item){
        console.log(item);
        this.apiProvider.postTask(item.name, item.description);
      }

    })

    addModal.present();

  }

  // saveItem(item): void{
  //   this.items.push(item);
  //   this.dataService.save(this.items);
  // }

  viewItem(task): void{
    this.navCtrl.push(ItemDetailPage,{
      task: task
    });
  }

}