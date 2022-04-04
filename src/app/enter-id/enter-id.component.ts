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

  ngOnInit(): void {
  }

  getUsername(){
    let resp = this.service.addUsername(new UserInfo(this.username,this.tempdata.getSportName()));
    resp.subscribe(data=>{
      if (data == "Error: The entered username already exists!"){
        this.errorResponse = true;
        return;
      }
      this.tempdata.setId(Number(data));
      this.router.navigate(["/chatroom"]);
    }
    //   , err => {
    //   if (err instanceof HttpErrorResponse) {
    //     console.log(err);
    //     if (err.status === 401) {
    //       this.errorMessage = ("Error: Invalid username!");
    //     } else {
    //       this.errorMessage = "Error: the entered username already exists!"
    //     }
    //   }
    //  }
    )

  }
}
