import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productReducer } from './../root-store/product/product.reducer';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', productReducer),
  ],
})
export class ProductsModule {}
