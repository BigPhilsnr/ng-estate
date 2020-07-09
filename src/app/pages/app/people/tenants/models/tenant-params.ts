import { Tenant } from './tenant';

export interface TenantParams {
  filter?: string;
  sortDirection?: 'asc' | 'desc'| '';
  sortField?: string;
  pageIndex?: number;
  pageSize?: number;
  tenant?: Tenant;
}
