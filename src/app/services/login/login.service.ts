import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { IUserInformation } from 'src/app/Interfaces/userInformation';

import { URL_LOGIN, API_LOGIN_CHECK_JWT } from '../../services/environment';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(payload: {
    userEmail: string;
    userPassword: string;
  }): Observable<IUserInformation> {
    return this.http.post<IUserInformation>(URL_LOGIN, { ...payload });
  }

  loginByJwt(token: string): Observable<IUserInformation> {
    return this.http.post<IUserInformation>(API_LOGIN_CHECK_JWT, { token });
  }
}
