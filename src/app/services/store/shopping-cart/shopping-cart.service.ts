import { CartResponseForUser } from './../../../Interfaces/GetCartUser';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';

import {
  API_GET_CART_BY_CART_ID,
  URL_ADD_ITEMS_ARRAY_TO_CART,
  URL_DELETE_ALL_PRODUCT,
  URL_DELETE_PRODUCT,
  URL_GET_CART_BY_CUSTOMER_ID,
} from '../../environment';
import { AddItemsToCartByUserId } from 'src/app/Interfaces/AddItemsToCart';
import { IUpdateItemInCart } from 'src/app/Interfaces/UpdateItemInCart';

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

  // addNewCart(customerRef: string): Observable<GetCartByCustomerResponse> {

  //   return this.http.post<GetCartByCustomerResponse>(`${this.api_url_add_new_cart}`, {
  //     customerRef,
  //   });
  // }


  deleteProduct(cartId: string, productId: string): Observable<string> {
    return this.http.post<string>(URL_DELETE_PRODUCT, {
      cartId,
      productId,
    });
  }
  deleteAllProducts(cartId: string): Observable<string> {
    return this.http.post<string>(URL_DELETE_ALL_PRODUCT, {
      cartId,
    });
  }

  // getCartByCustomerRef(customerRef: string): Observable<CartResponseForUser> {

  //   return this.http.get<CartResponseForUser>(
  //     `${URL_GET_CART_BY_CUSTOMER_ID}/${customerRef}`
  //   );
  // }
  getCartByCartId(cartId: string): Observable<CartResponseForUser> {
    return this.http.get<CartResponseForUser>(
      `${API_GET_CART_BY_CART_ID}/${cartId}`
    );
  }

  updateItemOnCart({
    idCart,
    productRefId,
    quantity,
  }: IUpdateItemInCart): Observable<CartResponseForUser> {
    return this.http.post<CartResponseForUser>(
      `${this.api_url_change_quantity}`,
      { idCart, productRefId, quantity }
    );
  }
}
