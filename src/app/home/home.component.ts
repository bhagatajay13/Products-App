import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private products = [];
  constructor( public home_service : HomeService ){}

  ngOnInit() {
    this.home_service.getInfo().
    subscribe(data => this.products = data);
  }
  

}
