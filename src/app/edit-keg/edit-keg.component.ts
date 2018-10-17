import { Component, OnInit } from '@angular/core';
import { KEGS } from '../mock-keglist'
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent implements OnInit {

  kegs: Keg[] = KEGS;
  editField: boolean = false;
  loadEdit: boolean = false;
  beerName: string;

  editFieldFunction(bool:boolean){
    this.editField = bool;
  }
  loadEditFunction(bool:boolean){
    this.loadEdit = bool;
  }

  constructor() { }

  ngOnInit() {
  }

}
