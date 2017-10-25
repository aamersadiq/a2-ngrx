import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: 'orders',
        loadChildren: 'app/order/order.module#OrderModule',
        data: { title: 'Orders' }
    },
    {
        path: '',
        redirectTo: '/customers',
        pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: NoPreloading
  });