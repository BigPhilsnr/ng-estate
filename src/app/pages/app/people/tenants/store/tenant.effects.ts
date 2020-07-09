import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { TenantActionType,
  TenantLoadAction,
  TenantLoadSuccessAction,
  TenantLoadFailAction,
  TenantInsertSuccessAction,
  TenantInsertErrorAction,
  TenantDeleteSuccessAction,
  TenantDeleteErrorAction} from './tenant.actions';

import { TenantParams } from '../models/tenant-params';
import { TenantResponse } from '../models/tenant-response';
import { Tenant } from '../models/tenant';
import { TenantService } from '../services/tenant.service';

@Injectable()
export class TenantEffects {
  constructor(private service: TenantService, private actions$: Actions) { }

  @Effect()
  public loadTenants$ = this.actions$
    .pipe(ofType<TenantLoadAction>(TenantActionType.Loading),
      map(action => action.payload),
      switchMap((params: TenantParams) =>
        this.service.getTenants(params).pipe(
          map((response: TenantResponse) => new TenantLoadSuccessAction(response)),
          catchError((error) => of(new TenantLoadFailAction(error))),
        ),
      ),
    );

    @Effect()
    public createTenants$ = this.actions$
      .pipe(ofType<TenantLoadAction>(TenantActionType.Insert),
        map(action => action.payload),
        switchMap((params: TenantParams) =>
          this.service.createTenant(params.tenant).pipe(
            map((response: TenantResponse) => new TenantInsertSuccessAction(response)),
            catchError((error) => of(new TenantInsertErrorAction(error))),
          ),
        ),
      );

      @Effect()
      public updateAmins$ = this.actions$
        .pipe(ofType<TenantLoadAction>(TenantActionType.Update),
          map(action => action.payload),
          switchMap((params: TenantParams) =>
            this.service.updateTenant(params.tenant).pipe(
              map((response: TenantResponse) => new TenantInsertSuccessAction(response)),
              catchError((error) => of(new TenantInsertErrorAction(error))),
            ),
          ),
        );

        @Effect()
        public deleteAmins$ = this.actions$
          .pipe(ofType<TenantLoadAction>(TenantActionType.Delete),
            map(action => action.payload),
            switchMap((params: TenantParams) =>
              this.service.deleteTenant(params.tenant).pipe(
                map((response: TenantResponse) => new TenantDeleteSuccessAction(response)),
                catchError((error) => of(new TenantDeleteErrorAction(error))),
              ),
            ),
          );
}
