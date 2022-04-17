import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(private service:ApiService, public tempdata:TempdataService, private router: Router, public webSocketService: WebSocketService) { }

  messageToSend: string ="";
  errorResponse: boolean = false;
  messageDatas: any;
  // ngOnInit(): void {
  // }

  subscription!: Subscription;
  statusText!: string;
  
  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage(){
    const message = new Message(this.tempdata.getUsername(), this.messageToSend, new Date().toUTCString());
    this.webSocketService.sendMessage(message);
  }

}
