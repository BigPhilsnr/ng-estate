import { CustomerState, initialCustomerState } from './customer.state';
import { AdminState, initialAdminState } from '../../pages/app/people/admins/store/admin.state';
export interface GlobalState {
  customer: CustomerState;
  admin: AdminState;
}

export const initialGlobalState: GlobalState = {
  customer: initialCustomerState,
  admin: initialAdminState,
};
