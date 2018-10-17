import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayKegsComponent } from './display-kegs/display-kegs.component';
import { AddKegComponent } from './add-keg/add-keg.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { FormsModule }  from '@angular/forms';
import { CheckKegComponent } from './check-keg/check-keg.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayKegsComponent,
    AddKegComponent,
    EditKegComponent,
    CheckKegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
