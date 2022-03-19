import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const url = request.url;
    const jwt = localStorage.getItem('jwt');

    
    if((!url.includes('api/users/login') || !url.includes('api/users/register') && !!jwt)){
     
      const req = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${jwt}`)
      });
      return next.handle(req);
    }
    return next.handle(request);
  }
}
