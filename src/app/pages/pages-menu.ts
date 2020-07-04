import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'ANALYSIS',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'pie-chart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Summary',
    icon: 'bar-chart-2-outline',
    link: '/pages/summary',
  },
  {
    title: 'MANAGEMENT',
    group: true,
  },
  {
    title: 'Properties',
    icon: 'home-outline',
    children: [
      {
        title: 'Housing units',
        link: 'management/properties/housingunits',
        group: false,
      },
      {
        title: 'Land',
        link: 'management/properties/land',
      },
    ],
  },
  {
    title: 'Contractors',
    icon: 'pantone-outline',
    link: 'management/contractors',
  },
  {
    title: 'Client requests',
    icon: 'layers-outline',
    link: 'management/clientrequests',
  },
  {
    title: 'ACCOUNTING',
    group: true,
  },
  {
    title: 'Accounts',
    icon: 'briefcase-outline',
    children: [
      {
        title: 'BANK',
        link: 'accounts/bank',
      },
      {
        title: 'WALLETS',
        link: 'accounting/accounts/wallet',
      }, {
        title: 'M-PESA',
        link: 'accounting/accounts/mpesa',
      },
    ],

  },
  {
    title: 'Reports',
    icon: 'printer-outline',
    children: [
      {
        title: 'Balance Sheet',
        link: 'accounts/bank',
      },
      {
        title: 'Profit & Loss',
        link: 'accounting/accounts/wallet',
      },
       {
        title: 'General ledger',
        link: 'accounting/accounts/mpesa',
      },
      {
        title: 'Trial Balance',
        link: 'accounting/accounts/mpesa',
      },

    ],

  },
  {
    title: 'Payments',
    icon: 'credit-card-outline',
    children: [
      {
        title: 'Incoming',
        link: 'accounting/payments/incoming',
      },
      {
        title: 'Outgoing',
        link: 'accounting/payment/outgoing',
      },
    ],
  },
  {
    title: 'Invoices',
    icon: 'file-text-outline',
    link: 'accounting/invoices',
  },
  {
    title: 'MAINTENANCE',
    group: true,
  },
  {
    title: 'Property',
    icon: 'lock-outline',
    children: [
      {
        title: 'Work order',
        link: 'maintenance/property/workorder',
      },
      {
        title: 'Requests',
        link: 'maintenance/property/requests',
      },
    ],
  },
  {
    title: 'Housing unit',
    icon: 'lock-outline',
    children: [
      {
        title: 'Work order',
        link: 'maintenance/housingunit/workorder',
      },
      {
        title: 'Requests',
        link: 'maintenance/housingunit/requests',
      },
    ],
  },
  {
    title: 'PEOPLE',
    group: true,
  },
  {
    title: 'Admins',
    icon: 'person-done-outline',
    link: 'people/admins',
  },
  {
    title: 'LandLords',
    icon: 'home-outline',
    link: 'people/landlords',
  },
  {
    title: 'Employees',
    icon: 'person-outline',
    link: 'people/employees',
  },
  {
    title: 'Tenants',
    icon: 'people-outline',
    link: 'people/tenants',
  },
  {
    title: 'REPORTING',
    group: true,
  },
  {
    title: 'Contracts',
    icon: 'edit-2-outline',
    link: 'reporting/contracts',
  },
  {
    title: 'Notices',
    icon: 'attach-outline',
    link: 'reporting/notices',
  },
  {
    title: 'Non-Compliance',
    icon: 'file-outline',
    link: 'reporting/noncompliance',
  },
  {
    title: 'Prospects',
    icon: 'gift-outline',
    link: 'reporting/prospects',
  },
  {
    title: 'USER',
    group: true,
  },
  {
    title: 'Account',
    icon: 'lock-outline',
    children: [
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
      {
        title: 'Log out',
        link: '/auth/logout',

      },
    ],
  },
];
