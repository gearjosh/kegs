import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';
@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent implements OnInit {

  @Output() sendKeg = new EventEmitter();

  constructor() { }

  submitForm(beerName, beerBrand, abv, price) {
    let newKeg: Keg = new Keg(beerName, abv, price, beerBrand);
    this.sendKeg.emit(newKeg);
  }

  ngOnInit() {
  }

}
