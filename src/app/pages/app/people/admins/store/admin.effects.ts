import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AdminActionType,
  AdminLoadAction,
  AdminLoadSuccessAction,
  AdminLoadFailAction,
  AdminInsertSuccessAction,
  AdminInsertErrorAction,
  AdminDeleteSuccessAction,
  AdminDeleteErrorAction} from './admin.actions';
import { AdminService } from '../services/admin.service';
import { AdminParams } from '../models/admin-params';
import { AdminResponse } from '../models/admin-response';
import { Admin } from '../models/admin';

@Injectable()
export class AdminEffects {
  constructor(private service: AdminService, private actions$: Actions) { }

  @Effect()
  public loadAdmins$ = this.actions$
    .pipe(ofType<AdminLoadAction>(AdminActionType.Loading),
      map(action => action.payload),
      switchMap((params: AdminParams) =>
        this.service.getAdmins(params).pipe(
          map((response: AdminResponse) => new AdminLoadSuccessAction(response)),
          catchError((error) => of(new AdminLoadFailAction(error))),
        ),
      ),
    );

    @Effect()
    public createAdmins$ = this.actions$
      .pipe(ofType<AdminLoadAction>(AdminActionType.Insert),
        map(action => action.payload),
        switchMap((params: AdminParams) =>
          this.service.createAdmin(params.admin).pipe(
            map((response: AdminResponse) => new AdminInsertSuccessAction(response)),
            catchError((error) => of(new AdminInsertErrorAction(error))),
          ),
        ),
      );

      @Effect()
      public updateAmins$ = this.actions$
        .pipe(ofType<AdminLoadAction>(AdminActionType.Update),
          map(action => action.payload),
          switchMap((params: AdminParams) =>
            this.service.updateAdmin(params.admin).pipe(
              map((response: AdminResponse) => new AdminInsertSuccessAction(response)),
              catchError((error) => of(new AdminInsertErrorAction(error))),
            ),
          ),
        );

        @Effect()
        public deleteAmins$ = this.actions$
          .pipe(ofType<AdminLoadAction>(AdminActionType.Delete),
            map(action => action.payload),
            switchMap((params: AdminParams) =>
              this.service.deleteAdmin(params.admin).pipe(
                map((response: AdminResponse) => new AdminDeleteSuccessAction(response)),
                catchError((error) => of(new AdminDeleteErrorAction(error))),
              ),
            ),
          );
}
