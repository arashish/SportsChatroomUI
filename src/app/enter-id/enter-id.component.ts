import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { TempdataService } from '../tempdata.service';
import { UserInfo } from '../models/UserInfo';

@Component({
  selector: 'app-enter-id',
  templateUrl: './enter-id.component.html',
  styleUrls: ['./enter-id.component.css']
})
export class EnterIdComponent implements OnInit {

  constructor(private service:ApiService, private tempdata:TempdataService, private router: Router) { }

  username: string = "";
  errorResponse: boolean = false;
  sportName: string= "";

  ngOnInit(): void {
  }

  getUsername(){
    if (this.username != "") {
      sessionStorage.setItem('username', this.username)
      this.sportName = sessionStorage.getItem('sportName') as string;
      let resp = this.service.addUsername(new UserInfo(this.username, this.sportName));
      resp.subscribe(data=>{
        this.router.navigate(["/chatroom"]);
      }, err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 500) {
            this.errorResponse = true;
          } else {
            this.errorResponse = true;
          }
        }
       })
    } else {
      alert ("Error: The username cannot be blank");
    }
  }
  
}
