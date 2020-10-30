import { Product } from './../../core/models/product';
import { Action } from '@ngrx/store';
import { any } from 'joi';

//Define the Product Action types

export enum ProductActionType {
  LOAD_PRODUCTS = '[PRODUCT] Load PRODUCTS',
  LOAD_PRODUCTS_SUCCESS = '[PRODUCT] Load PRODUCTS Success',
  LOAD_PRODUCTS_FAIL = '[PRODUCT] Load PRODUCT Fail',
  LOAD_SINGLE_PRODUCT = '[PRODUCT] Load PRODUCTS',
  LOAD_SINGLE_PRODUCT_SUCCESS = '[PRODUCT] Load PRODUCTS Success',
  LOAD_SINGLE_PRODUCT_FAIL = '[PRODUCT] Load PRODUCT Fail',
  CREATE_PRODUCT_SUCCESS = '[PRODUCT] Create PRODUCT Success',
  CREATE_PRODUCT_FAIL = '[PRODUCT] Create PRODUCT Fail',
  UPDATE_PRODUCT_SUCCESS = '[PRODUCT] Create PRODUCT Success',
  UPDATE_PRODUCT_FAIL = '[PRODUCT] Create PRODUCT Fail',
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
