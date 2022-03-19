import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { CreateNewProduct } from 'src/app/InterfaceModal/CreateNewProduct';
import { IProduct } from 'src/app/InterfaceModal/Products';
import { EDIT_PRODUCT, NEW_PRODUCT } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class ProductEditService {
  constructor(private http: HttpClient) {}
  readonly api = 'http://localhost:3000/api/store';
  editProduct(product: IProduct) {
    return this.http.patch<IProduct>(EDIT_PRODUCT, product);
  }

  createNewProduct(payload: CreateNewProduct): Observable<IProduct>{
  return this.http.post<IProduct>(NEW_PRODUCT,payload)
  }

}
