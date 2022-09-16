import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/Interfaces/categories';
import { IProduct } from 'src/app/Interfaces/Products';
import {
  ALL_PRODUCT_QUN,
  GET_CATEGORY,
  SEARCH_PRODUCT_BY_NAME,
} from '../environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly url_api: string = 'http://localhost:3000/api/store';
  constructor(private http: HttpClient, private store: Store) {}

  fetchAllCategory(): Observable<Categories[]> {
    return this.http.get<Categories[]>(GET_CATEGORY);
  }

  getAllProductByCategoryId(categoryId: string): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(`${GET_CATEGORY}/${categoryId}`,{});
  }

  getProductsByName(str: string): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(SEARCH_PRODUCT_BY_NAME, {
      name: str,
    });
  }
  totalOfProductInDB(): Observable<{ quantityOfProducts: number }> {
    return this.http.get<{ quantityOfProducts: number }>(ALL_PRODUCT_QUN);
  }
}
