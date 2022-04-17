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
  userLoginTracking: any;

  ngOnInit(): void {
  }

  getUsername(){
    this.tempdata.setUsername(this.username);
    let resp = this.service.addUsername(new UserInfo(this.username,this.tempdata.getSportName()));
    this.router.navigate(["/chatroom"]);
  }
  
}
