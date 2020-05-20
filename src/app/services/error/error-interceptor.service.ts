 import {
    HttpErrorResponse, HttpEvent,
    HttpHandler, HttpInterceptor, HttpRequest,
    } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptorService implements HttpInterceptor {
  constructor() { }
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
  intercept(req: HttpRequest<any>, next: HttpHandler):
 Observable<HttpEvent<any>> {
    return next.handle(req)
  .pipe(
   catchError(this.handleError),
  );
  }
}
