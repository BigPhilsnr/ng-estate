import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { reducers } from '.';
import { CustomerEffects } from './effects/customer.effects';
import { AdminEffects } from '../pages/app/people/admins/store/admin.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ CustomerEffects, AdminEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  exports: [StoreModule],
})
export class StorageModule { }
