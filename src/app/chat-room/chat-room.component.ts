import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Message } from '../models/Message';
import { TempdataService } from '../tempdata.service';
import { Subscription, switchMap, timer } from 'rxjs';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit, OnDestroy {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  constructor(private service:ApiService, public tempdata:TempdataService, private router: Router, public webSocketService: WebSocketService) { }

  messageToSend: string ="";
  errorResponse: boolean = false;
  messageDatas: any;
  sportName: string="";
  username: string="";
  // ngOnInit(): void {
  // }

  subscription!: Subscription;
  statusText!: string;
  
  ngOnInit(): void {
    this.username = sessionStorage.getItem('username') as string;
    this.sportName = sessionStorage.getItem('sportName') as string;
    this.scrollToBottom();
    this.webSocketService.openWebSocket();
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
  }


  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage(){
    const message = new Message(this.username, this.messageToSend, this.sportName,new Date().toUTCString());
    this.webSocketService.sendMessage(message);
  }

  logout(){
    sessionStorage.setItem('username','');
    sessionStorage.setItem('sportName','');
    this.router.navigate(["/home"]);
  }

}
