
import { AdminAction, AdminActionType } from './admin.actions';
import { initialAdminState, AdminState, adminAdapter } from './admin.state';


export function adminReducer(state = initialAdminState, action: AdminAction): AdminState {
  switch (action.type) {
    case AdminActionType.Loading: {
      return { ...state, loading: true };
    }

    case AdminActionType.LoadSuccess: {
      return adminAdapter.addAll(action.payload.admins.docs, {
        ...state,
        error: false,
        loading: false,
        page: action.payload.admins.page,
        total: action.payload.admins.totalDocs,
      });
    }
    case AdminActionType.DeleteLoading:
    case AdminActionType.UpdateLoading:
    case AdminActionType.InsertLoading: {
      return { ...state, loading: true };
    }
    case AdminActionType.UpdateSuccess:
    case AdminActionType.InsertSuccess: {
      return adminAdapter.upsertOne(action.payload.admin, state);
    }
    case AdminActionType.UpdateError:
    case AdminActionType.DeleteError:
    case AdminActionType.InsertError: {
      return adminAdapter.removeAll({
        ...state,
        error: true,
        loading: false,
        total: 0,
      });
    }

    case AdminActionType.DeleteSuccess: {
      return adminAdapter.removeOne(action.payload.admin._id, state);
    }
    case AdminActionType.LoadFailure: {
      return adminAdapter.removeAll({
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
