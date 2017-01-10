/**
* @Author: thomasvanhoutte
* @Date:   2017-01-09T15:58:37+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-10T15:18:35+01:00
*/



import { Component, OnInit } from '@angular/core';
import { Telling } from '../Models/telling.model';
import { WaarnemingComponent } from '../Waarneming/waarneming.component';
import { VogelTellingService } from '../Service/vogeltelling.service';
import { Router } from '@angular/router';

@Component({
  selector: 'telling',
  template: `
  <div class="tellingen">
    <h3>Tellingen</h3>
    <div class="telling">
      <table>
      <tr *ngFor="let telling of tellingen; let i = index" (click)="changeID($event, i)" class="{{telling.id}}" [ngClass]="{'menu_selectedItem': (selectedIndex === i) }">
        <td class="{{telling.id}}">{{telling.datum}}</td>
        <td class="{{telling.id}}">{{telling.waarnemer}}</td>
      </tr>
      </table>
    </div>
  </div>
  `,
})

export class TellingComponent implements OnInit {
  errorMsg: string;
  tellingen: Array<Telling>;
  selectedIndex: Number;


  constructor(public vogeltellingService: VogelTellingService, public router: Router) { }

  getTellingen(vogeltellingService: VogelTellingService) {
    return this.vogeltellingService.getTelling().map((tellingen) => {
      this.tellingen = tellingen;
    });
  }

  ngOnInit() {
    this.getTellingen(this.vogeltellingService).subscribe(_ => {
      ;
    });
  }

  changeID(obj: any, i: Number){
      var id = obj.target.attributes.class.nodeValue;
      this.selectedIndex = i;
      this.router.navigate(['/telling', id]);
  }
}
