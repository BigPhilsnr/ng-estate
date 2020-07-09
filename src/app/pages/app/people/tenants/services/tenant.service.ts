import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TenantParams } from '../models/tenant-params';
import { TenantResponse } from '../models/tenant-response';
import { environment } from '../../../../../../environments/environment';
import { Tenant } from '../models/tenant';


@Injectable()
export class TenantService {

  constructor(private httpClient: HttpClient) { }
  private url = `${environment.apiBaseUrl}/api`;

  public getTenants(params: TenantParams): Observable<TenantResponse> {
    const page: String = (params.pageIndex + 1).toString();
    const limit: String = params.pageSize.toString();
     return this.httpClient.get<TenantResponse>(`${this.url}/tenant?page=${page}&limit=${limit}`, {});
  }

  public createTenant(params: Tenant): Observable<TenantResponse>{
    return this.httpClient.post<TenantResponse>(`${this.url}/tenant`, params);
  }

  public updateTenant(params: Tenant): Observable<TenantResponse> {
    return this.httpClient.put<TenantResponse>(`${this.url}/tenant`, params);
  }

  public deleteTenant(params: Tenant): Observable<TenantResponse>{
    return this.httpClient.delete<TenantResponse>(`${this.url}/tenant?_id=${params._id}`);
  }

}

