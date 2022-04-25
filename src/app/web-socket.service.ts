import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from './models/Message';
import { TempdataService } from './tempdata.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket!: WebSocket;
  message: Message[] = [];
  constructor(private tempdata: TempdataService, private router: Router) {
    
  }

  public openWebSocket(){
    console.log('Generating: ' + sessionStorage.getItem('sportName'));
    if (sessionStorage.getItem('sportName') == "Football"){
      this.webSocket = new WebSocket('ws://192.168.1.17:8080/footballchat')
    } else if (sessionStorage.getItem('sportName') == "Boxing") {
      this.webSocket = new WebSocket('ws://192.168.1.17:8080/boxingchat')
    }else if (sessionStorage.getItem('sportName') == "Baseball") {
      this.webSocket = new WebSocket('ws://192.168.1.17:8080/baseballchat')
    }else if (sessionStorage.getItem('sportName') == "Basketball") {
      this.webSocket = new WebSocket('ws://192.168.1.17:8080/basketballchat')
    }else if (sessionStorage.getItem('sportName') == "Hockey") {
      this.webSocket = new WebSocket('ws://192.168.1.17:8080/hockeychat')
    } else {
      //this.webSocket = new WebSocket('ws://localhost:8080/chat')
      alert ("Error: Cannot connect to the chatroom!")
      this.router.navigate(["/home"]);
    }

    this.webSocket.onopen = (event) => {
      console.log('open', event);
    };

    this.webSocket.onerror = error => {
      console.log('WebSocket error:', error)
    }

    this.webSocket.onmessage = (event) => {
      const messageTO = JSON.parse(event.data);
      this.message.push(messageTO)
    };

    this.webSocket.onclose = (event) => {
      console.log('Close', event);
    }
    
  }

  public sendMessage(message: Message){
    this.webSocket.send(JSON.stringify(message));
  }

  public closeWebSocket(){
    this.webSocket.close();
  }
}
