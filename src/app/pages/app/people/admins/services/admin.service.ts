import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AdminParams } from '../models/admin-params';
import { AdminResponse } from '../models/admin-response';
import { environment } from '../../../../../../environments/environment';
import { Admin } from '../models/admin';


@Injectable()
export class AdminService {

  constructor(private httpClient: HttpClient) { }
  private url = `${environment.apiBaseUrl}/api`;

  public getAdmins(params: AdminParams): Observable<AdminResponse> {
    const page: String = (params.pageIndex + 1).toString();
    const limit: String = params.pageSize.toString();
     return this.httpClient.get<AdminResponse>(`${this.url}/admin?page=${page}&limit=${limit}`, {});
  }

  public createAdmin(params: Admin): Observable<AdminResponse>{
    return this.httpClient.post<AdminResponse>(`${this.url}/admin`, params);
  }

  public updateAdmin(params: Admin): Observable<AdminResponse> {
    return this.httpClient.put<AdminResponse>(`${this.url}/admin`, params);
  }

  public deleteAdmin(params: Admin): Observable<AdminResponse>{
    return this.httpClient.delete<AdminResponse>(`${this.url}/admin?_id=${params._id}`);
  }

}

