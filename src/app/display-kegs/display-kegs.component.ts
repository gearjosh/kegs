import { Component, OnInit } from '@angular/core';
import { KEGS } from './../mock-keglist';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-display-kegs',
  templateUrl: './display-kegs.component.html',
  styleUrls: ['./display-kegs.component.css']
})
export class DisplayKegsComponent implements OnInit {

  kegs = KEGS;
  crimson = "red";

  constructor() { }

  ngOnInit() {
  }

}
