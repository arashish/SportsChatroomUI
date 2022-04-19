import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
export class ChatRoomComponent implements OnInit {
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
  imageUrl!: string;
  bulletinMessage !: string;
  bulletins : any;

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username') as string;
    this.sportName = sessionStorage.getItem('sportName') as string;
    if (this.sportName == "Football"){
      this.imageUrl = "assets/images/nfls.webp";
    } else if (this.sportName == "Boxing") {
      this.imageUrl = "assets/images/boxing.webp"
    }else if (this.sportName == "Baseball") {
      this.imageUrl = "assets/images/mlbs.webp"
    }else if (this.sportName == "Basketball") {
      this.imageUrl = "assets/images/nba.webp"
    }else if (this.sportName == "Hockey") {
      this.imageUrl = "assets/images/nhls.webp"
    }
    let resp = this.service.retrieveBulletin();
    resp.subscribe(data=>{
      this.bulletins = data;
      console.log(this.bulletins);
       for (var bulletin of this.bulletins){
          console.log(bulletin.sportName);
          console.log(typeof(bulletin.sportName))
          if (bulletin.sportName === this.sportName)
            {
              this.bulletinMessage = bulletin.message;
            }
        }
    }, err => {
    if (err instanceof HttpErrorResponse) {
      alert("Error: Cannot retrieve bulletin messages!");
    }
    })



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

  // @HostListener('window:beforeunload')
  // async ngOnDestroy(): Promise<void> {
  //   this.webSocketService.closeWebSocket();
  //   await this.logout();
  // }

  // @HostListener('window:beforeunload', ['$event'])
  // async beforeunloadHandler(event:any) {
    
  // }

  sendMessage(){
    const message = new Message(this.username, this.messageToSend, this.sportName,new Date().toUTCString());
    this.webSocketService.sendMessage(message);
    this.messageToSend ="";
    console.log(this.webSocketService.message);
  }

  logout(){
    sessionStorage.setItem('username','');
    sessionStorage.setItem('sportName','');
    let resp = this.service.deleteUsername(this.username);
    resp.subscribe(_data=>{
      this.router.navigate(["/home"]);
    }, err => {
    if (err instanceof HttpErrorResponse) {
      this.errorResponse = true;
      console.log("Error deleting the Username");
    }
    })
    //console.log("Going home..."+ this.username)
    //this.router.navigate(["/home"]);
  }

}
