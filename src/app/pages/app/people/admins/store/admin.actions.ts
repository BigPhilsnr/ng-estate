import { Action } from '@ngrx/store';
import { AdminParams } from '../models/admin-params';
import { AdminResponse } from '../models/admin-response';



export enum AdminActionType {
  Loading = '[Admin] Loading',
  LoadSuccess = '[Admin] LoadSuccess',
  LoadFailure = '[Admin] LoadFailure',

  InsertSuccess = '[Admin] InsertSuccess',
  InsertLoading = '[Admin] InsertLoading',
  InsertError = '[Admin] InsertError',
  Insert = '[Admin] InsertAdmin',

  UpdateSuccess = '[Admin] UpdateSuccess',
  UpdateLoading = '[Admin] UpdateLoading',
  UpdateError = '[Admin] UpdateError',
  Update = '[Admin] UpdateAdmin',

  DeleteSuccess = '[Admin] DeleteSuccess',
  DeleteLoading = '[Admin] DeleteLoading',
  DeleteError = '[Admin] DeleteError',
  Delete = '[Admin] DeleteAdmin',

}

export class AdminLoadAction implements Action {
  public readonly type = AdminActionType.Loading;
  constructor(public payload: AdminParams) {}
}

export class AdminInsertAction implements Action {
  public readonly type = AdminActionType.Insert;
  constructor(public payload: AdminParams) {}
}

export class AdminInsertLoadingAction implements Action {
  public readonly type = AdminActionType.InsertLoading;
  constructor(public payload: AdminParams) {}
}

export class AdminInsertSuccessAction implements Action {
  public readonly  type = AdminActionType.InsertSuccess;
  constructor(public payload: AdminResponse){}
 }

 export class AdminInsertErrorAction implements Action{
  public readonly type = AdminActionType.InsertError;
  constructor(public error: any){}
}

export class AdminLoadSuccessAction implements Action {
  public readonly type = AdminActionType.LoadSuccess;
  constructor(public payload: AdminResponse) {}
}


export class AdminLoadFailAction implements Action {
  public readonly type = AdminActionType.LoadFailure;
  constructor(public error: any) {}
}

// update
export class AdminUpdateAction implements Action {
  public readonly type = AdminActionType.Update;
  constructor(public payload: AdminParams) {}
}

export class AdminUpdateLoadingAction implements Action {
  public readonly type = AdminActionType.UpdateLoading;
  constructor(public payload: AdminParams) {}
}

export class AdminUpdateSuccessAction implements Action {
  public readonly  type = AdminActionType.UpdateSuccess;
  constructor(public payload: AdminResponse){}
 }

 export class AdminUpdateErrorAction implements Action{
  public readonly type = AdminActionType.UpdateError;
  constructor(public error: any){}
}

// update
export class AdminDeleteAction implements Action {
  public readonly type = AdminActionType.Delete;
  constructor(public payload: AdminParams) {}
}

export class AdminDeleteLoadingAction implements Action {
  public readonly type = AdminActionType.DeleteLoading;
  constructor(public payload: AdminParams) {}
}

export class AdminDeleteSuccessAction implements Action {
  public readonly  type = AdminActionType.DeleteSuccess;
  constructor(public payload: AdminResponse){}
 }

 export class AdminDeleteErrorAction implements Action{
  public readonly type = AdminActionType.DeleteError;
  constructor(public error: any){}
}




export type AdminAction = AdminLoadAction
 | AdminLoadSuccessAction
 | AdminLoadFailAction

 |AdminInsertSuccessAction
 |AdminInsertErrorAction
 |AdminInsertLoadingAction
 |AdminInsertAction

 |AdminUpdateSuccessAction
 |AdminUpdateErrorAction
 |AdminUpdateLoadingAction
 |AdminUpdateAction

 |AdminDeleteSuccessAction
 |AdminDeleteErrorAction
 |AdminDeleteLoadingAction
 |AdminDeleteAction;
