/**
* @Author: thomasvanhoutte
* @Date:   2017-01-09T16:03:27+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-10T14:49:33+01:00
*/

import { Component, OnInit } from '@angular/core';
import { Waarneming } from '../Models/waarneming.model';
import { VogelTellingService } from '../Service/vogeltelling.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'waarneming',
  template: `
  <div class="waarnemingen">
    <h3>Waarneming</h3>
    <div *ngFor="let waarneming of waarnemingen; let i = index" class="waarneming">
      <p class="vogelsoort">{{waarneming.vogelsoort}}</p>
      <p class="aantal">{{waarneming.aantal}}</p>
    </div>
  </div>
  `,
})

export class WaarnemingComponent implements OnInit {
  errorMsg: string;
  waarnemingen: Array<Waarneming>;
  private sub: any;
  id: number;

  constructor(public vogeltellingService: VogelTellingService, private route: ActivatedRoute) {
  }

  getWaarnemingen(vogeltellingService: VogelTellingService) {
    return vogeltellingService.getWaarneming(this.id).map((waarnemingen) => {
      this.waarnemingen = waarnemingen;
    });
  }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id'];
    this.getWaarnemingen(this.vogeltellingService, this.id).subscribe(_ => {
});
      });





  }

ngOnDestroy() {
  this.sub.unsubscribe();
}
}
