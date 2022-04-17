import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempdataService {

  private sportName: string="";
  private username: string ="" ;
  private userLoginTracking: any;

  constructor() { }

  public getSportName(){
    return this.sportName;
  }

  public setSportName(sportName: string){
    this.sportName =sportName;
  }

  public getUsername(){
    return this.username;
  }

  public setUsername(username: string){
    this.username =username;
  }

  public getUserLoginTracking(){
    return this.userLoginTracking;
  }

  public setUserLoginTracking(userLoginTracking: any){
    this.userLoginTracking =userLoginTracking;
  }

}
