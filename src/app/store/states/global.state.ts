import { CustomerState, initialCustomerState } from './customer.state';
import { AdminState, initialAdminState } from '../../pages/app/people/admins/store/admin.state';
import { TenantState, initialTenantState } from '../../pages/app/people/tenants/store/tenant.state';

export interface GlobalState {
  customer: CustomerState;
  admin: AdminState;
  tenant: TenantState;
}

export const initialGlobalState: GlobalState = {
  customer: initialCustomerState,
  admin: initialAdminState,
  tenant: initialTenantState,
};
