/**
* @Author: thomasvanhoutte
* @Date:   2017-01-09T16:13:03+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-10T12:38:51+01:00
*/



import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Telling } from "../Models/telling.model";
import 'rxjs/add/operator/map';

@Injectable()
export class VogelTellingService {
  constructor(private http: Http) {

  }

  getTelling() {
      return this.http.get("https://datatank.stad.gent/4/milieuennatuur/vogeltellingbourgoyenmetadata.json").map(res => {
          var body = res.json();
          var tellingen = [];
          for(let i = 0; i < body.length; i++){
           var telling = {
             id: body[i]["Telling ID"],
             waarnemer: body[i]["waarnemer"],
             datum: body[i]["Datum"]
           };
           tellingen.push(telling);
          }
          console.info("getMetadataService is triggered. Tellingen array should be filled.");
          return tellingen;
      });
  }

  getWaarneming(id: Number) {
      return this.http.get("https://datatank.stad.gent/4/milieuennatuur/vogeltellingbourgoyenwaarneming.json").map(res => {
          var body = res.json();
          var ID = "Telling ID " + id;
          var waarnemingen = [];
          for(let i = 0; i < body.length; i++){
           var waarneming = {
             vogelsoort: body[i]["Vogelsoort"],
             aantal: body[i][ID]
           };
           if(waarneming.aantal == ""){
             waarneming.aantal = 0;
           }
           waarnemingen.push(waarneming);
          }
          console.info("getWaarnemingService is triggered. Waarnemingen array should be filled.");
          return waarnemingen;
      });
  }
}
