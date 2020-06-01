import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { AuthGuard } from '../services';
import { AgencyComponent } from './views/agency/component/agency.component';
import { BankComponent } from './app/accounting/accounts/bank/bank.component';
import { SummaryComponent } from './app/analysis/summary/summary.component';
import { UnitPropertyManagementComponent } from './app/management/property/unit/unit-property-management.component';
import { LandPropertyManagementComponent } from './app/management/property/land/land-property-management.component';
import { ContractorComponent } from './app/management/contractors/contractor.component';
import { ClientRequestComponent } from './app/management/clientrequests/client-request.component';
import { WalletComponent } from './app/accounting/accounts/wallet/wallet.component';
import { MpesaComponent } from './app/accounting/accounts/mpesa/mpesa.component';
import { IncomingPaymentsComponent } from './app/accounting/payments/incoming/incoming-payments.component';
import { OutgoingPaymentsComponent } from './app/accounting/payments/outgoing/outgoing-payments.component';
import { InvoiceComponent } from './app/accounting/invoices/invoice.component';
import { MaintananceWorkorderComponent } from './app/maintanance/property/workorders/maintanance-workorder.component';
import { MaintananceRequestComponent } from './app/maintanance/property/request/maintanance-request.component';
import { MaintananceUnitRequestComponent } from './app/maintanance/unit/request/maintanance-unit-request.component';
// tslint:disable-next-line: import-spacing
import { MaintananceUnitWorkorderComponent }
from './app/maintanance/unit/workorders/maintanance-unit-workorder.component';
import { AdminPeopleComponent } from './app/people/admins/admin-people.component';
import { LandlordPeopleComponent } from './app/people/landlords/landlord-people.component';
import { EmployeePeopleComponent } from './app/people/employees/employee-people.component';
import { TenantsPeopleComponent } from './app/people/tenants/tenants-people.component';
import { ContractReportingComponent } from './app/reporting/contracts/contract-reporting.component';
import { NoticeReportingComponent } from './app/reporting/notices/notice-reporting.component';
import { ComplianceReportingComponent } from './app/reporting/compliance/compliance-reporting.component';
import { ProspectReportingComponent } from './app/reporting/prospects/prospect-reporting.component';
import { TblComponent } from './tbl/tbl.component';
import { EchartsComponent } from './charts/echarts/echarts.component';
import { SingleUnitComponent } from './app/management/property/single-unit/single-unit.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: SummaryComponent,
    },
    {
      path: 'accounts/bank',
      component: BankComponent,
    },
    {
      path: 'summary',
      component: EchartsComponent,
    },
    {
      path: 'management/properties/housingunits',
      component: UnitPropertyManagementComponent,
    },
    {
      path: 'management/properties/housingunits/unit',
      component: SingleUnitComponent,
    },
    {
      path: 'management/properties/land',
      component: LandPropertyManagementComponent,
    },
    {
      path: 'management/contractors',
      component: ContractorComponent,
    },
    {
      path: 'management/clientrequests',
      component: ClientRequestComponent,
    },
    {
      path: 'accounting/accounts/bank',
      component: BankComponent ,
    },
    {
      path: 'accounting/accounts/wallet',
      component: TblComponent,
    },
    {
      path: 'accounting/accounts/mpesa',
      component: MpesaComponent ,
    },
    {
      path: 'accounting/payments/incoming',
      component: IncomingPaymentsComponent,
    },
    {
      path: 'accounting/payment/outgoing',
      component: OutgoingPaymentsComponent ,
    },
    {
      path: 'accounting/invoices',
      component: InvoiceComponent,
    },
    {
      path: 'maintenance/property/workorder',
      component: MaintananceWorkorderComponent,
    },
    {
      path: 'maintenance/property/requests',
      component: MaintananceRequestComponent,
    },
    {
      path: 'maintenance/housingunit/requests',
      component: MaintananceUnitRequestComponent ,
    },
    {
      path: 'maintenance/housingunit/workorder',
      component: MaintananceUnitWorkorderComponent,
    },
    {
      path: 'people/admins',
      component: AdminPeopleComponent,
    },
    {
      path: 'people/landlords',
      component: LandlordPeopleComponent ,
    },
    {
      path: 'people/employees',
      component: EmployeePeopleComponent ,
    },
    {
      path: 'people/tenants',
      component: TenantsPeopleComponent,
    },
    {
      path: 'reporting/contracts',
      component: ContractReportingComponent,
    },
    {
      path: 'reporting/notices',
      component: NoticeReportingComponent,
    },
    {
      path: 'reporting/noncompliance',
      component: ComplianceReportingComponent,
    },
    {
      path: 'reporting/prospects',
      component: ProspectReportingComponent,
    },

    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: DashboardComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
