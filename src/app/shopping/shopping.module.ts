import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { BasketComponent } from './basket/basket.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AppCommonModule } from '../app-common/app-common.module';


@NgModule({
  declarations: [ListProductsComponent, BasketComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    MatDialogModule,
    AppCommonModule
  ]
})
export class ShoppingModule { }
