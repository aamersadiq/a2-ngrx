import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CustomerComponent } from './customer.component';

export const routes: Routes = [
    {
        path: 'customers',
        component: CustomerComponent,
        data: { title: 'Customers' }
    }
  ];

  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);