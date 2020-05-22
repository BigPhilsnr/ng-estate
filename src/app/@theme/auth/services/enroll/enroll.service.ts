import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Agent } from '../../models/agent';

@Injectable({
  providedIn: 'root',
})
export class EnrollService {

  private url = `${environment.apiBaseUrl}/api/agency`;
  constructor(private http: HttpClient) {

  }

  public createAgency(data): Observable<Agent> {
   return this.http.post(`${this.url}`, data).pipe(
      map((res: Agent) => {
        return res;
      }),
    );

  }
}
