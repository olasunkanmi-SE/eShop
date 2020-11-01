
import { CoreModule } from './../core/core.module';
import { MaterialModule } from './../material/material.module';
import { ProductEffect } from './../root-store/product/product.effect';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productReducer } from './../root-store/product/product.reducer';
import { StoreModule } from '@ngrx/store';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './product-add/component/add-product/add-product.component';
import { AddProductPageComponent } from './product-add/container/add-product-page/add-product-page.component';
import { EditProductComponent } from './product-edit/component/edit-product/edit-product.component';
import { EditProductPageComponent } from './product-edit/container/edit-product-page/edit-product-page.component';
import { ListProductComponent } from './product-list/component/list-product/list-product.component';
import { ListProductPageComponent } from './product-list/container/list-product-page/list-product-page.component';
import { ProductDetailComponent } from './product-detail/component/product-detail/product-detail.component';
import { ProductDetailPageComponent } from './product-detail/container/product-detail-page/product-detail-page.component';
import { FormsModule } from '@angular/forms';
import { EffectsModule, Actions } from '@ngrx/effects';

@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    AddProductPageComponent,
    EditProductComponent,
    EditProductPageComponent,
    ListProductComponent,
    ListProductPageComponent,
    ProductDetailComponent,
    ProductDetailPageComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    CoreModule,
    EffectsModule.forFeature([ProductEffect]),
    StoreModule.forFeature('products', productReducer),
  ],
})
export class ProductsModule {}
