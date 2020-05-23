import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';

import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from '../../../@core/module-import-guard';
import {
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
} from '../../../@core/utils';
import { UserData } from '../../../@core/data/users';
import { ElectricityData } from '../../../@core/data/electricity';
import { SmartTableData } from '../../../@core/data/smart-table';
import { UserActivityData } from '../../../@core/data/user-activity';
import { OrdersChartData } from '../../../@core/data/orders-chart';
import { ProfitChartData } from '../../../@core/data/profit-chart';
import { TrafficListData } from '../../../@core/data/traffic-list';
import { EarningData } from '../../../@core/data/earning';
import { OrdersProfitChartData } from '../../../@core/data/orders-profit-chart';
import { TrafficBarData } from '../../../@core/data/traffic-bar';
import { ProfitBarAnimationChartData } from '../../../@core/data/profit-bar-animation-chart';
import { TemperatureHumidityData } from '../../../@core/data/temperature-humidity';
import { SolarData } from '../../../@core/data/solar';
import { TrafficChartData } from '../../../@core/data/traffic-chart';
import { StatsBarData } from '../../../@core/data/stats-bar';
import { CountryOrderData } from '../../../@core/data/country-order';
import { StatsProgressBarData } from '../../../@core/data/stats-progress-bar';
import { VisitorsAnalyticsData } from '../../../@core/data/visitors-analytics';
import { SecurityCamerasData } from '../../../@core/data/security-cameras';

import { UserService } from '../../../@core/mock/users.service';
import { ElectricityService } from '../../../@core/mock/electricity.service';
import { SmartTableService } from '../../../@core/mock/smart-table.service';
import { UserActivityService } from '../../../@core/mock/user-activity.service';
import { OrdersChartService } from '../../../@core/mock/orders-chart.service';
import { ProfitChartService } from '../../../@core/mock/profit-chart.service';
import { TrafficListService } from '../../../@core/mock/traffic-list.service';
import { EarningService } from '../../../@core/mock/earning.service';
import { OrdersProfitChartService } from '../../../@core/mock/orders-profit-chart.service';
import { TrafficBarService } from '../../../@core/mock/traffic-bar.service';
import { ProfitBarAnimationChartService } from '../../../@core/mock/profit-bar-animation-chart.service';
import { TemperatureHumidityService } from '../../../@core/mock/temperature-humidity.service';
import { SolarService } from '../../../@core/mock/solar.service';
import { TrafficChartService } from '../../../@core/mock/traffic-chart.service';
import { StatsBarService } from '../../../@core/mock/stats-bar.service';
import { CountryOrderService } from '../../../@core/mock/country-order.service';
import { StatsProgressBarService } from '../../../@core/mock/stats-progress-bar.service';
import { VisitorsAnalyticsService } from '../../../@core/mock/visitors-analytics.service';
import { SecurityCamerasService } from '../../../@core/mock/security-cameras.service';
import { RippleService } from '../../../@core/utils/ripple.service';
import { MockDataModule } from '../../../@core/mock/mock-data.module';
import { NbAuthModule } from '../../../@theme/auth/auth.module';
import { NbPasswordAuthStrategy } from '../../../@theme/auth/strategies/password/password-strategy';


const socialLinks = [
  {
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'twitter',
  },
];

const DATA_SERVICES = [
  { provide: UserData, useClass: UserService },
  { provide: ElectricityData, useClass: ElectricityService },
  { provide: SmartTableData, useClass: SmartTableService },
  { provide: UserActivityData, useClass: UserActivityService },
  { provide: OrdersChartData, useClass: OrdersChartService },
  { provide: ProfitChartData, useClass: ProfitChartService },
  { provide: TrafficListData, useClass: TrafficListService },
  { provide: EarningData, useClass: EarningService },
  { provide: OrdersProfitChartData, useClass: OrdersProfitChartService },
  { provide: TrafficBarData, useClass: TrafficBarService },
  { provide: ProfitBarAnimationChartData, useClass: ProfitBarAnimationChartService },
  { provide: TemperatureHumidityData, useClass: TemperatureHumidityService },
  { provide: SolarData, useClass: SolarService },
  { provide: TrafficChartData, useClass: TrafficChartService },
  { provide: StatsBarData, useClass: StatsBarService },
  { provide: CountryOrderData, useClass: CountryOrderService },
  { provide: StatsProgressBarData, useClass: StatsProgressBarService },
  { provide: VisitorsAnalyticsData, useClass: VisitorsAnalyticsService },
  { provide: SecurityCamerasData, useClass: SecurityCamerasService },
  {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useExisting: RippleService},
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  ...NbAuthModule.forRoot({

    strategies: [
     NbPasswordAuthStrategy.setup({
        name: 'email',
      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
