import { Tenant } from './tenant';

export interface TenantPayload {
  total: number;
  docs: Tenant[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
}
