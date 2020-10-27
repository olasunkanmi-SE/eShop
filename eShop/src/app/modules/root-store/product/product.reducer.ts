import * as productActions from './product.actions';
import { Product } from './../../core/models/product';
import { ActionReducerMap } from '@ngrx/store';

export interface productState {
  products: Product[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const initialState: productState = {
  products: [],
  loading: false,
  loaded: false,
  error: '',
};

export function productReducer(
  state = initialState,
  action: productActions.productAction
): productState {
  switch (action.type) {
    case productActions.ProductActionType.LOAD_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case productActions.ProductActionType.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        products: action.payload,
      };
    case productActions.ProductActionType.LOAD_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
      };
    case productActions.ProductActionType.LOAD_SINGLE_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case productActions.ProductActionType.LOAD_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        products: action.payload,
      };
    case productActions.ProductActionType.LOAD_SINGLE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
      };
    case productActions.ProductActionType.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        products: action.payload,
      };
    case productActions.ProductActionType.UPDATE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
      };
    case productActions.ProductActionType.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        products: action.payload,
      };
    case productActions.ProductActionType.CREATE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
      };
  }
}
