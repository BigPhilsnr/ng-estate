import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { NbAuthService } from '../services/auth.service';
import { map } from 'rxjs/internal/operators/map';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: NbAuthService) {
  }


  private authToken(): string {
    return localStorage.getItem('token');
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('api') && this.auth.isAuthenticated) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${this.authToken()}` },
      });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            const authToken =  event.headers.get('Authorization').replace('Bearer', '').trim();
            if (authToken) {
              localStorage.setItem('token', authToken);
            }

          }
          return event;
      }));
  }
}
