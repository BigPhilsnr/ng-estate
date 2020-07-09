import { createSelector, createFeatureSelector } from '@ngrx/store';
import { tenantAdapter, TenantState } from './tenant.state';


export const {
  selectIds: _selectTenantDataIds,
  selectEntities: _selectTenantEntities,
  selectAll: _selectAllTenant,
  selectTotal: _selectTenantTotal,
} = tenantAdapter.getSelectors();

export const selectTenantState = createFeatureSelector<TenantState>('tenant');

export const selectTenantIds = createSelector(
  selectTenantState,
  _selectTenantDataIds,
);

export const selectTenantEntities = createSelector(
  selectTenantState,
  _selectTenantEntities,
);

export const selectAllTenant = createSelector(
  selectTenantState,
  _selectAllTenant,
);

export const selectTenantError = createSelector(
  selectTenantState,
  (state: TenantState): boolean => state.error,
);

export const selectTenantLoading = createSelector(
  selectTenantState,
  (state: TenantState): boolean => state.loading,
);


export const selectTenantTotal = createSelector(
  selectTenantState,
  (state: TenantState): number => state.total,
);
