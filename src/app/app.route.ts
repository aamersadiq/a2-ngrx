import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: 'matters',
        loadChildren: 'app/matter/matter.module#MatterModule',
        data: { title: 'Matters' }
    },
    {
        path: '',
        redirectTo: '/persons',
        pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: NoPreloading
  });