import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthorComponent } from './author.component';

export const routes: Routes = [
    {
        path: 'authors',
        component: AuthorComponent,
        data: { title: 'Authors' }
    }
  ];

  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);