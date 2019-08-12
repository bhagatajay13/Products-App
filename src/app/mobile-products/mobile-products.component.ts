import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-mobile-products',
  templateUrl: './mobile-products.component.html',
  styleUrls: ['./mobile-products.component.css']
})
export class MobileProductsComponent implements OnInit {
  private mobileproducts =[];
  constructor(public mobile_service : HomeService) { }

  ngOnInit() {
    this.mobile_service.getMobileProducts().
    subscribe(data => this.mobileproducts = data);
  }

}
