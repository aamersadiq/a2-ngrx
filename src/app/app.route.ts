import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';

export const routes: Routes = [
    {
        path: 'orders',
        component: OrderComponent,
        data: { title: 'Orders' }
    },
    {
        path: '',
        redirectTo: '/customers',
        pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);