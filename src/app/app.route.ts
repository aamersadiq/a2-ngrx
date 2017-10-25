import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';

export const appRoutes: Routes = [
    {
        path: 'customers',
        component: CustomerComponent,
        data: { title: 'Customers' }
    },
    { path: '',
      redirectTo: '/customers',
      pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
  ];
