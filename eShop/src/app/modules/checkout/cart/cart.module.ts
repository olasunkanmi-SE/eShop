import { CoreModule } from './../../core/core.module';
import { MaterialModule } from './../../material/material.module';
import { DisplayCartPageComponent } from './display-cart/container/display-cart-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { DisplayCartComponent } from './display-cart/component/display-cart.component';
import { EmptyCartComponent } from './empty-cart/component/empty-cart.component';
import { EmptyCartPageComponent } from './empty-cart/container/empty-cart-page.component';
import { InterestedComponent } from './interested/component/interested.component';
import { InterestedPageComponent } from './interested/container/interested-page.component';

@NgModule({
  declarations: [
    CartComponent,
    DisplayCartComponent,
    DisplayCartPageComponent,
    EmptyCartComponent,
    EmptyCartPageComponent,
    InterestedComponent,
    InterestedPageComponent,
  ],
  imports: [CommonModule, CartRoutingModule, MaterialModule, CoreModule],
})
export class CartModule {}
