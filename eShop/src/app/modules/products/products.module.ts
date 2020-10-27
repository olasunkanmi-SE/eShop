import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productReducer } from './../root-store/product/product.reducer';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './product-add/component/add-product/add-product.component';
import { AddProductPageComponent } from './product-add/container/add-product-page/add-product-page.component';
import { EditProductComponent } from './product-edit/component/edit-product/edit-product.component';
import { EditProductPageComponent } from './product-edit/container/edit-product-page/edit-product-page.component';
import { ListProductComponent } from './product-list/component/list-product/list-product.component';
import { ListProductPageComponent } from './product-list/container/list-product-page/list-product-page.component';

@NgModule({
  declarations: [ProductsComponent, AddProductComponent, AddProductPageComponent, EditProductComponent, EditProductPageComponent, ListProductComponent, ListProductPageComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', productReducer),
  ],
})
export class ProductsModule {}
