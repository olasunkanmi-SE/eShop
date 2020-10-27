import { Product } from './../../core/models/product';
import * as productActions from './product.actions';
import { ProductService } from './../../core/services/product.service';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, Effect } from '@ngrx/effects';
import { mergeMap, map, catchError, exhaustMap } from 'rxjs/operators';
@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
  /**
   * Create effects to load simulate the product actions
   * @return the products observable or return an error
   */
  @Effect()
  getProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<productActions.LoadProducts>(
        productActions.ProductActionType.LOAD_PRODUCTS
      ),
      exhaustMap((action: productActions.LoadProducts) => {
        return this.productService.getProducts().pipe(
          map(
            (products: Product[]) =>
              new productActions.LoadProductsSuccess(products)
          ),
          catchError((err) => of(new productActions.LoadProductsFail(err)))
        );
      })
    )
  );
}
