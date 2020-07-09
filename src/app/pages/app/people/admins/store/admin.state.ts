import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Admin } from '../models/admin';


export interface AdminState extends EntityState<Admin> {
  error: boolean;
  loading: boolean;
  total: number;
  page: number;
}

export const adminAdapter: EntityAdapter<Admin> = createEntityAdapter<Admin>({
  selectId: (admin: Admin) => admin._id,
});

export const initialAdminState: AdminState = adminAdapter.getInitialState({
  error: false,
  loading: true,
  total: 0,
  page: 0,
});
