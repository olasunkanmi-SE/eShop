import { ListProductPageComponent } from './product-list/container/list-product-page/list-product-page.component';
import { AddProductPageComponent } from './product-add/container/add-product-page/add-product-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: 'product/create', component: AddProductPageComponent },
      { path: 'product/list', component: ListProductPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
