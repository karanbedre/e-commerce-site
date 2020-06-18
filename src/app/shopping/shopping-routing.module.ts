import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { BasketComponent } from './basket/basket.component';


const routes: Routes = [
  {
    path: '', component: ListProductsComponent,
  },
  {
    path: 'basket', component: BasketComponent,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
