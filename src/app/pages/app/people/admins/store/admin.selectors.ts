import { createSelector, createFeatureSelector } from '@ngrx/store';
import { adminAdapter, AdminState } from './admin.state';


export const {
  selectIds: _selectAdminDataIds,
  selectEntities: _selectAdminEntities,
  selectAll: _selectAllAdmin,
  selectTotal: _selectAdminTotal,
} = adminAdapter.getSelectors();

export const selectAdminState = createFeatureSelector<AdminState>('admin');

export const selectAdminIds = createSelector(
  selectAdminState,
  _selectAdminDataIds,
);

export const selectAdminEntities = createSelector(
  selectAdminState,
  _selectAdminEntities,
);

export const selectAllAdmin = createSelector(
  selectAdminState,
  _selectAllAdmin,
);

export const selectAdminError = createSelector(
  selectAdminState,
  (state: AdminState): boolean => state.error,
);

export const selectAdminLoading = createSelector(
  selectAdminState,
  (state: AdminState): boolean => state.loading,
);


export const selectAdminTotal = createSelector(
  selectAdminState,
  (state: AdminState): number => state.total,
);
