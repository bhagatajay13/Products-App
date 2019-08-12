import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private tvproduct =[];
  constructor(public tv_service : HomeService) { }

  ngOnInit() {
    this.tv_service.getTVProducts().
    subscribe(data => this.tvproduct = data);
  
  }

  

}
