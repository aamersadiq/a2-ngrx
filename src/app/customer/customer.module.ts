import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routing } from './customer.route'
import { CustomerComponent } from './customer.component';


@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    routing
  ],
  providers: [],
})
export class CustomerModule { }
