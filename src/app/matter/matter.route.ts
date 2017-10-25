import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MatterComponent } from './matter.component';

export const routes: Routes = [
    {
        path: '',
        component: MatterComponent,
        data: { title: 'Matters' }
    }
  ];

  export const routing: ModuleWithProviders = RouterModule.forChild(routes);