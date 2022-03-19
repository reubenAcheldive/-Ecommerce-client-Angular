import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map, Observable } from 'rxjs';
import { CartItemsResponse } from 'src/app/InterfaceModal/LastCartItemResponse';
import { GetCartByCustomerResponse } from '../../../InterfaceModal/GetCartByCustomerResponse';
import { GetCartByCartIdResponse } from 'src/app/InterfaceModal/GetCartByCartIdResponse';
import { API_GET_CART_BY_CART_ID, URL_ADD_PRODUCT, URL_DELETE_ALL_PRODUCT, URL_DELETE_PRODUCT, URL_GET_CART_BY_CUSTOMER_ID } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  readonly base_api_url = 'http://localhost:3000/api/store';
  readonly api_url_add_new_cart = `${this.base_api_url}/addNewCart`;
  readonly api_url_add_Product = `${this.base_api_url}/addProduct`;
  readonly api_url_delete_product = `${this.base_api_url}/deleteProduct`;
  readonly api_url_delete_all_products = `${this.base_api_url}/deleteAllProducts`;
  readonly api_url_get_cart_by_customer_Id = `${this.base_api_url}/getCart`; // customerRef params
  readonly api_url_get_cart_by_cart_Id = `${this.base_api_url}/getByCartId`; // cartId params
  readonly api_url_change_quantity = `${this.base_api_url}/updateQuantity`;

  constructor(private http: HttpClient) {}

  addNewCart(customerRef: string): Observable<GetCartByCustomerResponse> {


    return this.http.post<GetCartByCustomerResponse>(`${this.api_url_add_new_cart}`, {
      customerRef,
    });
  }

  addProductToList(payload: {
    cartId: string;
    productRefId: string;
    quantity: number;
  }): Observable<CartItemsResponse> {


    return this.http.post<CartItemsResponse>(URL_ADD_PRODUCT, payload);
  }

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

  getCartByCustomerRef(customerRef: string): Observable<GetCartByCustomerResponse> {


    return this.http.get<GetCartByCustomerResponse>(
      `${URL_GET_CART_BY_CUSTOMER_ID}/${customerRef}`
    );
  }
  getCartByCartId(cartId: string): Observable<GetCartByCartIdResponse> {
    return this.http.get<GetCartByCartIdResponse>(`${API_GET_CART_BY_CART_ID}/${cartId}`);
  }

}

