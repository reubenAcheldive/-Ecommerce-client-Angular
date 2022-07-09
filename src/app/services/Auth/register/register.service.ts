import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUser } from 'src/app/Interfaces/auth/userInformation';

import { URL_FIRST_STEP_REGISTER, URL_STEP_TWO_REGISTER } from '../../environment';
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  readonly baseUrl = 'http://localhost:3000/api/users/register';

  isRegistered(id: string): Observable<boolean> {
    return this.http.post<boolean>(URL_FIRST_STEP_REGISTER, {
      id,
    });
  }
  fullRegister(data: IUser): Observable<IUser> {
    return this.http.post<IUser>(URL_STEP_TWO_REGISTER, data, {
      headers,
    });
  }
}
