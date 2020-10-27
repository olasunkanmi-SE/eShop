import { Product } from './../../core/models/product';
import { Action } from '@ngrx/store';

export enum ProductActionType {
  LOAD_PRODUCTS = '[Product] Load Products',
  LOAD_PRODUCTS_SUCCESS = '[Product] Load Products Success',
  LOAD_PRODUCTS_FAIL = '[Product] Load Product Fail',
  LOAD_PRODUCT = '[Product] Load Products',
  LOAD_PRODUCT_SUCCESS = '[Product] Load Products Success',
  LOAD_PRODUCT_FAIL = '[Product] Load Product Fail',
}

export class LoadProducts implements Action {
  readonly type = ProductActionType.LOAD_PRODUCTS;
}

export class LoadProductsSuccess implements Action {
  readonly type = ProductActionType.LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: { products: Product[] }) {}
}

export class LoadProductsFail implements Action {
  readonly type = ProductActionType.LOAD_PRODUCTS_FAIL;
  constructor(public payload: string) {}
}

export class LoadProduct implements Action {
  readonly type = ProductActionType.LOAD_PRODUCT;
}

export class LoadProductSuccess implements Action {
  readonly type = ProductActionType.LOAD_PRODUCT_SUCCESS;
  constructor(public payload: { products: Product }) {}
}

export class LoadProductFail implements Action {
  readonly type = ProductActionType.LOAD_PRODUCT_FAIL;
  constructor(public payload: string) {}
}

export type videoAction =
  | LoadProducts
  | LoadProduct
  | LoadProductSuccess
  | LoadProductsSuccess
  | LoadProductFail
  | LoadProductFail;
