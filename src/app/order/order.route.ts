import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { OrderComponent } from './order.component';

export const routes: Routes = [
    {
        path: '',
        component: OrderComponent,
        data: { title: 'Orders' }
    }
  ];

  export const routing: ModuleWithProviders = RouterModule.forChild(routes);