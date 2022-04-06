import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { TempdataService } from './tempdata.service';
import { UserInfo } from './models/UserInfo';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private tempdata: TempdataService) { }

  baseUrl: string = "http://localhost:8080";

  public addUsername(userInfo: UserInfo): Observable<UserInfo>{
    return this.http.post<UserInfo>(this.baseUrl + '/addusername', userInfo);
  }
  
}

