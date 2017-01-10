/**
* @Author: thomasvanhoutte
* @Date:   2017-01-05T18:36:36+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-10T14:12:38+01:00
*/



import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TellingComponent } from './Telling/telling.component';
import { WaarnemingComponent } from './Waarneming/waarneming.component';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule,
    RouterModule.forRoot([
      {
        path: 'telling/:id',
        component: WaarnemingComponent
      }
    ]) ],
  declarations: [ AppComponent, TellingComponent, WaarnemingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
