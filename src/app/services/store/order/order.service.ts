import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createNewOrder } from 'src/app/InterfaceModal/createNewOrder';
import {
  lastOrderDetail,

} from 'src/app/InterfaceModal/lastOrderDetail';
import { CHECK_ORDER_DATE, CREATE_NEW_ORDER, GET_ALL_ORDER, GET_LAST_ORDER, GET_USER_DETAILS, RESPITES } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getDetailsShipments(
    customerRef: string
  ): Observable<{ city: string; address: string }> {
    return this.http.get<{ city: string; address: string }>(
      `${GET_USER_DETAILS}/${customerRef}`
    );
  }
  createNewOrder(
    payload: createNewOrder
  ): Observable<{ message: string; idOrder: string }> {
    return this.http.post<{ message: string; idOrder: string }>(
      CREATE_NEW_ORDER,
      payload
    );
  }

  getLastOrderDetail(_id: string): Observable<lastOrderDetail[]> {
    return this.http.get<lastOrderDetail[]>(
      `${GET_LAST_ORDER}/${_id}`
    );
  }
  getOrdersQuantity(): Observable<{
    quantityOrders: number;
  }> {
    return this.http.get<{
      quantityOrders: number;
    }>(GET_ALL_ORDER);
  }

  downloadReceipt(cartId: string, orderId: string): Observable<any> {
    console.log({ cartId });
    console.log({ orderId });

    let searchParams = new HttpParams();
    searchParams = searchParams.append('cartId', cartId);
    searchParams = searchParams.append('orderId', orderId);
    return this.http.get(RESPITES, {
      params: searchParams,
      responseType: 'text',
    });
  }

  fetchAllUnavailableDates(): Observable<string[]> {
    return this.http.get<string[]>(CHECK_ORDER_DATE);
  }
}
