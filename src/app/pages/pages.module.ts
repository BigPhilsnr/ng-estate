import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
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


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    AgencyModule,
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
  ],
})
export class PagesModule {
}
