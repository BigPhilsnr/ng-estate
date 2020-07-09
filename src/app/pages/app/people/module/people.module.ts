import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../admins/services/admin.service';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AdminPeopleComponent } from '../admins/operations/list/admin-people.component';
import { NbCardModule } from '@nebular/theme';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { DisableControlDirective } from '../../../../@theme/directives/diable-control';
import { EditTenantComponent } from '../tenants/edit/edit-tenant.component';
import { TenantDetailComponent } from '../tenants/detail/tenant-detail.component';
import { TenantService } from '../tenants/services/tenant.service';



@NgModule({
  declarations: [AdminPeopleComponent, DisableControlDirective,  EditTenantComponent, TenantDetailComponent ],
  imports: [
    CommonModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    NbCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,

  ],
  providers: [AdminService,TenantService],
})
export class PeopleModule { }
