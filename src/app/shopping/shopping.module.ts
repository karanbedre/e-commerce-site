import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { BasketComponent } from './basket/basket.component';


@NgModule({
  declarations: [ListProductsComponent, BasketComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
