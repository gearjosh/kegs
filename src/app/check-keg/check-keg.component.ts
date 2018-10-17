import { Component, OnInit } from '@angular/core';
import { KEGS } from '../mock-keglist';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-check-keg',
  templateUrl: './check-keg.component.html',
  styleUrls: ['./check-keg.component.css']
})
export class CheckKegComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
