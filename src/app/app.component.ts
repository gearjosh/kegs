import { Component } from '@angular/core';
import { KEGS } from './mock-keglist';
import { Keg } from './models/keg.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kegs';

}
