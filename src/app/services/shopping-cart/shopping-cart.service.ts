import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import { AddItem } from 'src/app/Interfaces/cart/UpdateItemInCart';
import { Cart } from 'src/app/Interfaces/cart/GetCartUser';
import { URL_DELETE_PRODUCT } from '../environment';
import {
  URL_DELETE_ALL_PRODUCT,
  API_GET_CART_BY_CART_ID,
} from './../environment';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  readonly base_api_url = 'http://localhost:3000/api/store';
  readonly api_url_add_new_cart = `${this.base_api_url}/addNewCart`;
  readonly api_URL_ADD_ITEMS_ARRAY_TO_CART = `${this.base_api_url}/addProduct`;
  readonly api_url_delete_product = `${this.base_api_url}/deleteProduct`;
  readonly api_url_delete_all_products = `${this.base_api_url}/deleteAllProducts`;
  readonly api_url_get_cart_by_customer_Id = `${this.base_api_url}/getCart`; // customerRef params
  readonly api_url_get_cart_by_cart_Id = `${this.base_api_url}/getByCartId`; // cartId params
  readonly api_url_change_quantity = `${this.base_api_url}/update-one-item-cart`;

  constructor(private http: HttpClient) {}

  addNewCart(customerRef: string):  Observable<Cart> {

    return this.http.post<Cart>(`${this.api_url_add_new_cart}`, {
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
    return this.http.get<Cart>(`${API_GET_CART_BY_CART_ID}/${cartId}`);
  }

  updateItemOnCart({
    idCart,
    productRefId,
    quantity,
  }: AddItem): Observable<Cart> {
    return this.http.post<Cart>(`${this.api_url_change_quantity}`, {
      idCart,
      productRefId,
      quantity,
    });
  }
}
