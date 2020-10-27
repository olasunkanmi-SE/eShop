import { Product } from './../../core/models/product';
import { Action } from '@ngrx/store';
import { any } from 'joi';

//Define the Product Action types

export enum ProductActionType {
  LOAD_PRODUCTS = '[Product] Load Products',
  LOAD_PRODUCTS_SUCCESS = '[Product] Load Products Success',
  LOAD_PRODUCTS_FAIL = '[Product] Load Product Fail',
  LOAD_SINGLE_PRODUCT = '[Product] Load Products',
  LOAD_SINGLE_PRODUCT_SUCCESS = '[Product] Load Products Success',
  LOAD_SINGLE_PRODUCT_FAIL = '[Product] Load Product Fail',
  CREATE_PRODUCT_SUCCESS = '[Product] Create Product Success',
  CREATE_PRODUCT_FAIL = '[Product] Create Product Fail',
  UPDATE_PRODUCT_SUCCESS = '[Product] Create Product Success',
  UPDATE_PRODUCT_FAIL = '[Product] Create Product Fail',
}

//Define the product actions
export class LoadProducts implements Action {
  readonly type = ProductActionType.LOAD_PRODUCTS;
}

export class LoadProductsSuccess implements Action {
  readonly type = ProductActionType.LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadProductsFail implements Action {
  readonly type = ProductActionType.LOAD_PRODUCTS_FAIL;
  constructor(public payload: string) {}
}

export class LoadSingleProduct implements Action {
  readonly type = ProductActionType.LOAD_SINGLE_PRODUCT;
}

export class LoadSingleProductSuccess implements Action {
  readonly type = ProductActionType.LOAD_SINGLE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {}
}

export class LoadSingleProductFail implements Action {
  readonly type = ProductActionType.LOAD_SINGLE_PRODUCT_FAIL;
  constructor(public payload: string) {}
}

export class UpdateProductSuccess implements Action {
  readonly type = ProductActionType.UPDATE_PRODUCT_SUCCESS;
  constructor(public payload: any) {}
}

export class UpdateProductFail implements Action {
  readonly type = ProductActionType.UPDATE_PRODUCT_FAIL;
  constructor(public payload: any) {}
}

export class CreateProductSuccess implements Action {
  readonly type = ProductActionType.CREATE_PRODUCT_SUCCESS;
  constructor(public payload: any) {}
}

export class CreateProductFail implements Action {
  readonly type = ProductActionType.CREATE_PRODUCT_FAIL;
  constructor(public payload: any) {}
}

//Export the Product ations

export type productAction =
  | LoadProducts
  | LoadSingleProduct
  | LoadSingleProductSuccess
  | LoadProductsFail
  | LoadSingleProductFail
  | CreateProductSuccess
  | CreateProductFail
  | UpdateProductFail
  | UpdateProductSuccess
  | LoadProductsSuccess;
