import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Tenant } from '../models/tenant';


export interface TenantState extends EntityState<Tenant> {
  error: boolean;
  loading: boolean;
  total: number;
  page: number;
}

export const tenantAdapter: EntityAdapter<Tenant> = createEntityAdapter<Tenant>({
  selectId: (tenant: Tenant) => tenant._id,
});

export const initialTenantState: TenantState = tenantAdapter.getInitialState({
  error: false,
  loading: true,
  total: 0,
  page: 0,
});
