import { EmptyCartComponent } from './empty-cart/component/empty-cart.component';
import { DisplayCartPageComponent } from './display-cart/container/display-cart-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    children: [
      { path: 'overview', component: DisplayCartPageComponent },
      { path: 'empty', component: EmptyCartComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
