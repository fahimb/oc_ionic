import { Component } from '@angular/core';
import {ListServices} from "../../services/list.services";
import {MenuController, ModalController} from "ionic-angular";
import {Lendcdpage} from "../lendcdpage/lendcdpage";


@Component({
  selector: 'page-booklist',
  templateUrl: 'booklist.html',
})
export class BooklistPage {

  books = this.listServices.books;

  constructor(private listServices : ListServices, public modalCtrl: ModalController, public MenuCtrl: MenuController){

  }
  Openmodal(element){
    let modal = this.modalCtrl.create(Lendcdpage, {element : element});
    modal.present();
  }

  onToggleMenu(){
    this.MenuCtrl.open();
  }
}
