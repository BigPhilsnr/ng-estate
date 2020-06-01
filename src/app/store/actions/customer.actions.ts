import { Action } from '@ngrx/store';
import { CustomerParams } from '../../pages/customer-table/models/customer-params';
import { CustomerResponse } from '../../pages/customer-table/models/customer-response';


export enum CustomerActionType {
  Loading = '[Customer] Loading',
  LoadSuccess = '[Customer] LoadSuccess',
  LoadFailure = '[Customer] LoadFailure',
}

export class CustomerLoadAction implements Action {
  public readonly type = CustomerActionType.Loading;
  constructor(public payload: CustomerParams) {}
}

export class CustomerLoadSuccessAction implements Action {
  public readonly type = CustomerActionType.LoadSuccess;
  constructor(public payload: CustomerResponse) {}
}

export class CustomerLoadFailAction implements Action {
  public readonly type = CustomerActionType.LoadFailure;
  constructor(public error: any) {}
}

export type CustomerAction = CustomerLoadAction | CustomerLoadSuccessAction | CustomerLoadFailAction;