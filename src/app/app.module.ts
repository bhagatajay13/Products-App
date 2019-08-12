import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {routingComponents} from './app-routing.module';
import {ProductService} from './product.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HomeService} from './home.service';
import { ReactiveFormsModule  } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
