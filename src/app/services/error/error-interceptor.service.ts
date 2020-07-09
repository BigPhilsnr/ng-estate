 import {
    HttpErrorResponse, HttpEvent,
    HttpHandler, HttpInterceptor, HttpRequest,
    } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(catchError(err => {
          if (err.status === 401) {
            const url = '/auth/login';
               this.router.navigateByUrl(url).then(e => { });
          }

          const error = err.error.message || err.statusText;
          return throwError(error);
      }));
  }
}
