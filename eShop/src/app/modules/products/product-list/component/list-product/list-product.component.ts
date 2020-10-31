import { Observable } from 'rxjs';
import { Product } from './../../../../core/models/product';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as productActions from '../../../../root-store/product/product.actions';
import * as fromProduct from '../../../../root-store/product/product.reducer';
import * as UIactions from '../../../../root-store/ui/ui.actions';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent implements OnInit {
  productState;
  products$: Observable<Product[]>;
  isLoading$;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new productActions.LoadProducts());
    this.isLoading$ = this.store.pipe(select(fromProduct.getProductsLoading));
    this.products$ = this.store.pipe(select(fromProduct.getProducts));
  }
}
