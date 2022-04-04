import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempdataService {

  private sportName: string="";
  private id: number =0 ;

  constructor() { }

  public getSportName(){
    return this.sportName;
  }

  public setSportName(sportName: string){
    this.sportName =sportName;
  }

  public getId(){
    return this.id;
  }

  public setId(id: number){
    this.id =id;
  }


}
