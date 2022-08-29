import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url_Add_New_Payment, Url_Delete_On_Payment, Url_Get_All_Payment } from '../environment';
import { Observable } from 'rxjs';
import { IPayment } from 'src/app/Interfaces/Payment/Payment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  public getAllPaymentBy_CustomerId(
    customerId: string
  ): Observable<IPayment[]> {
    return this.http.post<IPayment[]>(Url_Get_All_Payment, { customerId });
  }
  public addNewPayment(payload:IPayment ):Observable<IPayment> {
    return this.http.post<IPayment>(Url_Add_New_Payment,{payload})
  }
  public updatePayment(payload:IPayment ):Observable<void> {
    return this.http.patch<void>(Url_Add_New_Payment,{payload})
  }
  public deletePaymentById(_id:string ):Observable<object> {
    return this.http.patch(Url_Delete_On_Payment(_id),{})
  }
}
