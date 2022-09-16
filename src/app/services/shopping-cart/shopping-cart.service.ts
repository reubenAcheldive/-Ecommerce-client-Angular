import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { AddItem } from 'src/app/Interfaces/cart/UpdateItemInCart';
import { Cart } from 'src/app/Interfaces/cart/GetCartUser';
import {
  api_url_change_quantity,
  URL_ADD_NEW_CART,
  URL_DELETE_PRODUCT,
  URL_GET_CART_BY_CUSTOMER_ID,
  URL_Get_cart_by_id,
} from '../environment';
import { URL_DELETE_ALL_PRODUCT } from './../environment';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private http: HttpClient) {}

  addNewCart(customerRef: string): Observable<Cart> {
    return this.http.post<Cart>(URL_ADD_NEW_CART, {
      customerRef,
    });
  }

  deleteProduct(
    cartId: string,
    itemId: string
  ): Observable<{ idItem: string }> {
    return this.http.post<{ idItem: string }>(URL_DELETE_PRODUCT, {
      cartId,
      itemId,
    });
  }
  deleteAllProducts(cartId: string): Observable<any> {
    return this.http.post(URL_DELETE_ALL_PRODUCT, { cartId });
  }

  getCartByCartId(cartId: string): Observable<Cart> {
    return this.http.get<Cart>(URL_Get_cart_by_id(cartId));
  }

  getCartByCustomerId(customerRef: string): Observable<Cart> {
    return this.http.get<Cart>(URL_GET_CART_BY_CUSTOMER_ID(customerRef));
  }
  updateItemOnCart({
    idCart,
    productRefId,
    quantity,
  }: AddItem): Observable<Cart> {
    return this.http.post<Cart>(api_url_change_quantity, {
      idCart,
      productRefId,
      quantity,
    });
  }
}
