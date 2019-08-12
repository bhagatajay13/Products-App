import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  private _url: string = "https://ds-ecom.azurewebsites.net/products";
  private tv_url:string = "https://ds-ecom.azurewebsites.net/products/tv";
  private mobile_url = "https://ds-ecom.azurewebsites.net/products/mobile";

  constructor(private http: HttpClient) { }

  getInfo(): Observable<[]> {
    return this.http.get<[]>(this._url);
  }

  getTVProducts(): Observable<[]> {
    return this.http.get<[]>(this.tv_url);
  }

  getMobileProducts(): Observable<[]> {
    return this.http.get<[]>(this.mobile_url);
  }

}
