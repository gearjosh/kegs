import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayKegsComponent } from './display-kegs/display-kegs.component';
import { AddKegComponent } from './add-keg/add-keg.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayKegsComponent,
    AddKegComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
