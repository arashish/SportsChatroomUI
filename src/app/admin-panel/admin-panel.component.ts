import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Bulletin } from '../models/Bulletin';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private service: ApiService) { }

  footballBulletinMessage!: string;
  boxingBulletinMessage!: string;
  baseballBulletinMessage!: string;
  basketballBulletinMessage!: string;
  hockeyBulletinMessage!: string;

  private bulletins: any;
  public messages: any;
  public userInfos: any;

  ngOnInit(): void {
    let resp = this.service.retrieveBulletin();
    resp.subscribe(data=>{
      this.bulletins = data;
      var items: string[] = [];
      for (var bulletin of this.bulletins){
          items.push(bulletin.message);
        }
      
      
      this.footballBulletinMessage = items[0];
      this.boxingBulletinMessage  = items[1];
      this.baseballBulletinMessage  = items[2];
      this.basketballBulletinMessage  = items[3];
      this.hockeyBulletinMessage  = items[4];
      
    }, err => {
    if (err instanceof HttpErrorResponse) {
      alert("Error: Cannot retrieve bulletin messages!");
    }
    })

    let resp2 = this.service.retrieveUsers();
    resp2.subscribe(data=>{
      this.userInfos = data;
      console.log(this.userInfos);
    }, err => {
    if (err instanceof HttpErrorResponse) {
      console.log("Error: Cannot retrieve users.");
    }
    })

    let resp3 = this.service.retrieveMessages();
    resp3.subscribe(data=>{
      this.messages = data;
      console.log(this.messages.message);
    }, err => {
    if (err instanceof HttpErrorResponse) {
      console.log("Error: Cannot retrieve messages.");
    }
    })

  }

  updateBulletin(sportName: string){
    var id ="";
    var message= "";
    if (sportName == 'Football'){
      id = '1';
      message = this.footballBulletinMessage;
    } else if (sportName == 'Boxing'){
      id= '2';
      message = this.boxingBulletinMessage;
    }else if (sportName == 'Baseball'){
      id= '3';
      message = this.baseballBulletinMessage;
    }else if (sportName == 'Basketball'){
      id= '4';
      message = this.basketballBulletinMessage;
      console.log('Basket')
    }else if (sportName == 'Hockey'){
      id= '5';
      message = this.hockeyBulletinMessage;
      console.log('Hockey')
    }

    let resp = this.service.updateBulletin(new Bulletin(id,sportName,message));
    resp.subscribe(data=>{
      alert("Bulletin message updated!");
    }, err => {
    if (err instanceof HttpErrorResponse) {
      alert("Error: Cannot retrieve bulletin messages!");
    }
    })
  }

  clearUsers(){
    let resp = this.service.deleteUsers();
    resp.subscribe(_data=>{
      window.location.reload();
    }, err => {
    if (err instanceof HttpErrorResponse) {
      console.log("Error deleting the usernames");
    }
    })
  }

  clearMessages(){
    let resp = this.service.deleteMessages();
    resp.subscribe(_data=>{
      window.location.reload();
    }, err => {
    if (err instanceof HttpErrorResponse) {
      console.log("Error deleting the messages");
    }
    })
  }

}
