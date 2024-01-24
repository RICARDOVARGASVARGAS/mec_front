import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private auth: ApiService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log('interceptor');
    // console.log(this.auth.token);
    const headers: any = new HttpHeaders({
      Authorization: 'Bearer ' + this.auth.token,
      Accept: 'application/json',
    });

    const reqClone = req.clone({
      headers,
    });

    return next.handle(reqClone);
  }
}
