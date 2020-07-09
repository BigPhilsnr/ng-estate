
import { TenantAction, TenantActionType } from './tenant.actions';
import { initialTenantState, TenantState, tenantAdapter } from './tenant.state';


export function tenantReducer(state = initialTenantState, action: TenantAction): TenantState {
  switch (action.type) {
    case TenantActionType.Loading: {
      return { ...state, loading: true };
    }

    case TenantActionType.LoadSuccess: {
      return tenantAdapter.addAll(action.payload.tenants.docs, {
        ...state,
        error: false,
        loading: false,
        page: action.payload.tenants.page,
        total: action.payload.tenants.totalDocs,
      });
    }
    case TenantActionType.DeleteLoading:
    case TenantActionType.UpdateLoading:
    case TenantActionType.InsertLoading: {
      return { ...state, loading: true };
    }
    case TenantActionType.UpdateSuccess:
    case TenantActionType.InsertSuccess: {
      return tenantAdapter.upsertOne(action.payload.tenant, state);
    }
    case TenantActionType.UpdateError:
    case TenantActionType.DeleteError:
    case TenantActionType.InsertError: {
      return tenantAdapter.removeAll({
        ...state,
        error: true,
        loading: false,
        total: 0,
      });
    }

    case TenantActionType.DeleteSuccess: {
      return tenantAdapter.removeOne(action.payload.tenant._id, state);
    }
    case TenantActionType.LoadFailure: {
      return tenantAdapter.removeAll({
        ...state,
        error: true,
        loading: false,
        total: 0,
      });
    }
    default:
      return state;
  }
}
