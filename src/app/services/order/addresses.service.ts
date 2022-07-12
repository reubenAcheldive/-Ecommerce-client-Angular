import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAddresses } from 'src/app/Interfaces/order/addresses';
import { GET_ADDRESS } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class AddressesService {
  constructor(private http: HttpClient) {}

  getAddressesList(customerRef: string): Observable<IAddresses> {
    return this.http.get<IAddresses>(`${GET_ADDRESS}/${customerRef}`);
  }

  editAddress(payload: IAddresses): Observable<IAddresses> {
    return this.http.post<IAddresses>(GET_ADDRESS, { payload });
  }
}
