import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { IUser } from 'src/app/Interfaces/auth/userInformation';

import { URL_LOGIN, API_LOGIN_CHECK_JWT } from '../../../services/environment';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(payload: {
    email: string;
    password: string;
  }): Observable<IUser> {
    return this.http.post<IUser>(URL_LOGIN, { ...payload });
  }

  loginByJwt(token: string): Observable<IUser> {
    return this.http.post<IUser>(API_LOGIN_CHECK_JWT, { token });
  }
}
