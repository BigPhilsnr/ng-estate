import { Admin } from './admin';

export interface AdminParams {
  filter?: string;
  sortDirection?: 'asc' | 'desc'| '';
  sortField?: string;
  pageIndex?: number;
  pageSize?: number;
  admin?: Admin;
}
