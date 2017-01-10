/**
* @Author: thomasvanhoutte
* @Date:   2017-01-09T16:27:08+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-09T16:28:11+01:00
*/



export class Waarneming{
  constructor(public vogelsoort: string, public aantal: number){

  }
}

export class VogelTellingService extends Waarneming{
  constructor(vogelsoort:string, aantal:number){
    super(vogelsoort, aantal);
  }
}
