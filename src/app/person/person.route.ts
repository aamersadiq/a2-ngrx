import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PersonComponent } from './person.component';

export const routes: Routes = [
    {
        path: 'persons',
        component: PersonComponent,
        data: { title: 'Persons' }
    }
  ];

  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);