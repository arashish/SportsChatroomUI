import { Component, OnInit } from '@angular/core';
import { TempdataService } from '../tempdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tempdata:TempdataService, private router: Router) { }

  ngOnInit(): void {
  }

  sportSelection(sportName : string){
    this.tempdata.setSportName(sportName);
    this.router.navigate(["/enterid"]);
  }

}
