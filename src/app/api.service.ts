import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { TempdataService } from './tempdata.service';
import { UserInfo } from './models/UserInfo';
import { Observable } from 'rxjs';
import { Message } from './models/Message';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private tempdata: TempdataService) { }

  baseUrl: string = "http://localhost:8080";

  public addUsername(userInfo: UserInfo){
    return this.http.post<UserInfo>(this.baseUrl + '/addusername', userInfo);
  }

  public deleteUsername(username: string){
    console.log("It's deleteing")
    const headers = new HttpHeaders();
    return this.http.delete(this.baseUrl + '/deleteusername/' + username, {headers});
  }
  
  public storemessage(message: Message): Observable<Message>{
    return this.http.post<Message>(this.baseUrl + '/storemessage', message);
  }

  public retrievemessages(){
    return this.http.get<Message>(this.baseUrl + '/retrievemessages');
  }
  
}

