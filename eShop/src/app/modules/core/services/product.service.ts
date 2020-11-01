import { Product } from './../models/product';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseURL = environment.baseURL;
  constructor(private http: HttpClient, private store: Store) {}

  /**
   * Fetch products
   * @return products array Observable
   */

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURL}/products`);
  }

  /**
   * Get a specific product
   * @return a product Observable
   */

  getProduct(payload: number): Observable<Product> {
    return this.http.get<Product>(
      `${this.baseURL}/products/product/${payload}`
    );
  }
}
