import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Message } from '../models/Message';
import { TempdataService } from '../tempdata.service';
import { Subscription, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor(private service:ApiService, private tempdata:TempdataService, private router: Router) { }

  messageToSend: string ="";
  errorResponse: boolean = false;
  messageDatas: any;
  // ngOnInit(): void {
  // }

  subscription!: Subscription;
  statusText!: string;
  
  ngOnInit() {
    this.subscription = timer(0, 1000).pipe(
      switchMap(() => this.service.retrievemessages())
    ).subscribe(result => this.messageDatas = result);
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  sendMessage(){
    let resp = this.service.storemessage(new Message("",this.tempdata.getUserLoginTracking().userId, this.messageToSend, "", ""));
    console.log("log1")
    resp.subscribe(data=>{
      console.log(this.tempdata.getUserLoginTracking().loginTime)
      //this.router.navigate(["/chatroom"]);
    }
      , err => {
      if (err instanceof HttpErrorResponse) {
        console.log(err);
        if (err.status === 500) {
          this.errorResponse = true;
        } else {
          this.errorResponse = true;
        }
      }
     }
    )

    console.log("log2")
    resp = this.service.retrievemessages();
    resp.subscribe(data=>{
      console.log(data)
    })

    
  }

}
