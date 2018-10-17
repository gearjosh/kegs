import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayKegsComponent } from './display-kegs/display-kegs.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayKegsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
