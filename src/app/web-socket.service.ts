import { Injectable } from '@angular/core';
import { Message } from './models/Message';
import { TempdataService } from './tempdata.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket!: WebSocket;
  message: Message[] = [];
  constructor(private tempdata: TempdataService) {
    
  }

  public openWebSocket(){
    if (this.tempdata.getSportName() == "Football"){
      console.log("FOOTBALL");
      this.webSocket = new WebSocket('ws://192.168.1.16:8080/footballchat')
    } else if (this.tempdata.getSportName() == "Boxing") {
      console.log("BOXING");
      this.webSocket = new WebSocket('ws://192.168.1.16:8080/boxingchat')
    }else if (this.tempdata.getSportName() == "Baseball") {
      this.webSocket = new WebSocket('ws://192.168.1.16:8080/baseballchat')
    }else if (this.tempdata.getSportName() == "Basketball") {
      this.webSocket = new WebSocket('ws://192.168.1.16:8080/basketballchat')
    }else if (this.tempdata.getSportName() == "Hockey") {
      this.webSocket = new WebSocket('ws://192.168.1.16:8080/hockeychat')
    } else {
      this.webSocket = new WebSocket('ws://192.168.1.16:8080/chat')
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
    console.log(message);
    this.webSocket.send(JSON.stringify(message));
  }

  public closeWebSocket(){
    this.webSocket.close();
  }
}
