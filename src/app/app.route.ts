import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    // {
    //     path: 'orders',
    //     component: OrderComponent,
    //     data: { title: 'Orders' }
    // },
    {
        path: '',
        redirectTo: '/customers',
        pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);