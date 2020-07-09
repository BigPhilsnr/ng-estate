import { Action } from '@ngrx/store';
import { TenantParams } from '../models/tenant-params';
import { TenantResponse } from '../models/tenant-response';



export enum TenantActionType {
  Loading = '[Tenant] Loading',
  LoadSuccess = '[Tenant] LoadSuccess',
  LoadFailure = '[Tenant] LoadFailure',

  InsertSuccess = '[Tenant] InsertSuccess',
  InsertLoading = '[Tenant] InsertLoading',
  InsertError = '[Tenant] InsertError',
  Insert = '[Tenant] InsertTenant',

  UpdateSuccess = '[Tenant] UpdateSuccess',
  UpdateLoading = '[Tenant] UpdateLoading',
  UpdateError = '[Tenant] UpdateError',
  Update = '[Tenant] UpdateTenant',

  DeleteSuccess = '[Tenant] DeleteSuccess',
  DeleteLoading = '[Tenant] DeleteLoading',
  DeleteError = '[Tenant] DeleteError',
  Delete = '[Tenant] DeleteTenant',

}

export class TenantLoadAction implements Action {
  public readonly type = TenantActionType.Loading;
  constructor(public payload: TenantParams) {}
}

export class TenantInsertAction implements Action {
  public readonly type = TenantActionType.Insert;
  constructor(public payload: TenantParams) {}
}

export class TenantInsertLoadingAction implements Action {
  public readonly type = TenantActionType.InsertLoading;
  constructor(public payload: TenantParams) {}
}

export class TenantInsertSuccessAction implements Action {
  public readonly  type = TenantActionType.InsertSuccess;
  constructor(public payload: TenantResponse){}
 }

 export class TenantInsertErrorAction implements Action{
  public readonly type = TenantActionType.InsertError;
  constructor(public error: any){}
}

export class TenantLoadSuccessAction implements Action {
  public readonly type = TenantActionType.LoadSuccess;
  constructor(public payload: TenantResponse) {}
}


export class TenantLoadFailAction implements Action {
  public readonly type = TenantActionType.LoadFailure;
  constructor(public error: any) {}
}

// update
export class TenantUpdateAction implements Action {
  public readonly type = TenantActionType.Update;
  constructor(public payload: TenantParams) {}
}

export class TenantUpdateLoadingAction implements Action {
  public readonly type = TenantActionType.UpdateLoading;
  constructor(public payload: TenantParams) {}
}

export class TenantUpdateSuccessAction implements Action {
  public readonly  type = TenantActionType.UpdateSuccess;
  constructor(public payload: TenantResponse){}
 }

 export class TenantUpdateErrorAction implements Action{
  public readonly type = TenantActionType.UpdateError;
  constructor(public error: any){}
}

// update
export class TenantDeleteAction implements Action {
  public readonly type = TenantActionType.Delete;
  constructor(public payload: TenantParams) {}
}

export class TenantDeleteLoadingAction implements Action {
  public readonly type = TenantActionType.DeleteLoading;
  constructor(public payload: TenantParams) {}
}

export class TenantDeleteSuccessAction implements Action {
  public readonly  type = TenantActionType.DeleteSuccess;
  constructor(public payload: TenantResponse){}
 }

 export class TenantDeleteErrorAction implements Action{
  public readonly type = TenantActionType.DeleteError;
  constructor(public error: any){}
}




export type TenantAction = TenantLoadAction
 | TenantLoadSuccessAction
 | TenantLoadFailAction
 |TenantInsertSuccessAction
 |TenantInsertErrorAction
 |TenantInsertLoadingAction
| TenantInsertAction

|TenantUpdateSuccessAction
 |TenantUpdateErrorAction
 |TenantUpdateLoadingAction
| TenantUpdateAction

|TenantDeleteSuccessAction
 |TenantDeleteErrorAction
 |TenantDeleteLoadingAction
| TenantDeleteAction;
