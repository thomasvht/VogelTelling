/**
* @Author: thomasvanhoutte
* @Date:   2017-01-09T16:14:44+01:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2017-01-09T16:16:59+01:00
*/



export class Telling{
  constructor(public id: number, public waarnemer: string, public datum: any){
    
  }
}

export class VogelTellingService extends Telling{
  constructor(id:number, waarnemer:string, datum:any){
    super(id, waarnemer, datum);
  }
}
