import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { MobileProductsComponent } from './mobile-products/mobile-products.component';

const appRoutes:Routes = [
  {path:'home', component: HomeComponent,
  children: [
    {
    path:  'tv',
    component:  ProductsComponent
    },
    {
      path:  'mobile',
      component:  MobileProductsComponent
      },
  ]
 },
  {path:'',redirectTo:'/home', pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductsComponent, HomeComponent, MobileProductsComponent]
