import { ActionReducerMap } from '@ngrx/store';
import { GlobalState } from './states/global.state';
import { customerReducer } from './reducers/customer.reducers';
import { adminReducer } from '../pages/app/people/admins/store/admin.reducers';
import { tenantReducer } from '../pages/app/people/tenants/store/tenant.reducers';

export const reducers: ActionReducerMap<GlobalState> = {
  customer: customerReducer,
  admin: adminReducer,
  tenant: tenantReducer,
};
