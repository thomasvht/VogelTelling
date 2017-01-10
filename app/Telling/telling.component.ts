/**
* @Author: thomasvanhoutte
* @Date:   2017-01-09T15:58:37+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-10T14:31:34+01:00
*/



import { Component, OnInit, NgZone } from '@angular/core';
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
      <table *ngFor="let telling of tellingen; let i = index" class="t{{telling.id}}" (click)="changeID($event, i)" [ngClass]="{'menu_selectedItem': (selectedIndex === i) }">
      <tr class="t{{telling.id % 2}}" [ngClass]="{'menu_selectedItem': (selectedIndex === i) }">
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
  tellingen: Telling[];


  constructor(public vogeltellingService: VogelTellingService, public router: Router, public zone: NgZone) { }

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
      let selectedIndex = i;
      this.router.navigate(['/telling', id]);
  }
}
