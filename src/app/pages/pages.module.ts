import { NgModule } from '@angular/core';
import { NbMenuModule,
  NbCardBodyComponent,
   NbCardHeaderComponent,
   NbCardModule, NbButtonModule,
   NbActionsModule,
    NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { AgencyModule } from './views/agency/agency.module';
import { BankComponent } from './app/accounting/accounts/bank/bank.component';
import { WalletComponent } from './app/accounting/accounts/wallet/wallet.component';
import { MpesaComponent } from './app/accounting/accounts/mpesa/mpesa.component';
import { InvoiceComponent } from './app/accounting/invoices/invoice.component';
import { PaymentComponent } from './app/accounting/payments/payment.component';
import { SummaryComponent } from './app/analysis/summary/summary.component';
import { MaintananceRequestComponent } from './app/maintanance/property/request/maintanance-request.component';
import { ClientRequestComponent } from './app/management/clientrequests/client-request.component';
import { ContractorComponent } from './app/management/contractors/contractor.component';
import { PropertyManagementComponent } from './app/management/property/property-management.component';
import { LandPropertyManagementComponent } from './app/management/property/land/land-property-management.component';
import { NoticeReportingComponent } from './app/reporting/notices/notice-reporting.component';
import { ProspectReportingComponent } from './app/reporting/prospects/prospect-reporting.component';
import { QueryReportingComponent } from './app/reporting/queries/query-reporting.component';
import { RequestReportingComponent } from './app/reporting/requests/request-reporting.component';
import { MaintananceWorkorderComponent } from './app/maintanance/property/workorders/maintanance-workorder.component';
import { MaintananceUnitRequestComponent } from './app/maintanance/unit/request/maintanance-unit-request.component';
import { MaintananceUnitWorkorderComponent } from './app/maintanance/unit/workorders/maintanance-unit-workorder.component';
import { IncomingPaymentsComponent } from './app/accounting/payments/incoming/incoming-payments.component';
import { OutgoingPaymentsComponent } from './app/accounting/payments/outgoing/outgoing-payments.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StorageModule } from '../store/storage.module';
import { TblComponent } from './tbl/tbl.component';
import { CustomerService } from './customer-table/services/customer.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UnitPropertyManagementComponent } from './app/management/property/unit/unit-property-management.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SingleUnitComponent } from './app/management/property/single-unit/single-unit.component';
import { ChartsModule } from './charts/charts.module';
import { ChartModule } from 'angular2-chartjs';
import { ContractReportingComponent } from './app/reporting/contracts/contract-reporting.component';
import { TenantsPeopleComponent } from './app/people/tenants/tenants-people.component';
import { EmployeePeopleComponent } from './app/people/employees/employee-people.component';
import { LandlordPeopleComponent } from './app/people/landlords/landlord-people.component';
import { AdminPeopleComponent } from './app/people/admins/operations/list/admin-people.component';
import { RoomSingleComponent } from './app/management/property/room/room/room.component';
import { EditorsModule } from './editors/editors.module';
import { CKEditorModule } from 'ng2-ckeditor';
import { PeopleModule } from './app/people/module/people.module';
import { AdminDetailComponent } from './app/people/admins/operations/admin-detail/admin-detail.component';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatIconModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule,
  MatPaginatorModule,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    AgencyModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    StorageModule,
    NbCardModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ChartsModule,
    NbButtonModule,
    NbActionsModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  DashboardModule,
  EditorsModule,
  CKEditorModule,
  PeopleModule,
  ...materialModules,

  ],
  declarations: [
    PagesComponent,
    BankComponent,
    WalletComponent,
    MpesaComponent,
    InvoiceComponent,
    PaymentComponent,
    SummaryComponent,
    MaintananceRequestComponent,
    ClientRequestComponent,
    ContractorComponent,
    PropertyManagementComponent,
    LandPropertyManagementComponent,
    NoticeReportingComponent,
    ProspectReportingComponent,
    QueryReportingComponent,
    RequestReportingComponent,
    MaintananceRequestComponent,
    MaintananceWorkorderComponent,
    MaintananceUnitRequestComponent,
    MaintananceUnitWorkorderComponent,
    IncomingPaymentsComponent,
    OutgoingPaymentsComponent,
    UnitPropertyManagementComponent,
    ContractReportingComponent,
    TenantsPeopleComponent,
    EmployeePeopleComponent,
    LandlordPeopleComponent,
    SingleUnitComponent,
    PaymentComponent,
    TblComponent,
    RoomSingleComponent,
    AdminDetailComponent,

  ],
  providers: [CustomerService],
  exports: [ChartModule],


})
export class PagesModule {
}
