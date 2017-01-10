/**
* @Author: thomasvanhoutte
* @Date:   2017-01-05T18:36:36+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-10T11:38:35+01:00
*/



import { Component } from '@angular/core';
import { VogelTellingService } from './Service/vogeltelling.service';
import { TellingComponent } from './Telling/telling.component';


@Component({
  selector: 'my-app',
  providers: [VogelTellingService],
  template: `
  <h1>{{name}}</h1>
  <telling></telling>
  <!-- <waarneming></waarneming> -->
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  { name = 'Vogeltellingen regio Gent'; }
