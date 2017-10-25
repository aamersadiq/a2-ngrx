import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';

export const appRoutes: Routes = [
    {
        path: 'customers',
        component: CustomerComponent,
        data: { title: 'Customers' }
    },
    {
        path: 'orders',
        component: OrderComponent,
        data: { title: 'Orders' }
    },
    { path: '',
      redirectTo: '/customers',
      pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
  ];
