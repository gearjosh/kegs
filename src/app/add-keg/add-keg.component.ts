import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';
@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent implements OnInit {
  addField: boolean = false;

  @Output() sendKeg = new EventEmitter();

  constructor() { }

  addFieldFunction(bool:boolean){
    this.addField = bool;
  }
  submitForm(beerName, beerBrand, abv, price) {
    let newKeg: Keg = new Keg(beerName, abv, price, beerBrand);
    this.sendKeg.emit(newKeg);
  }

  ngOnInit() {
  }

}
