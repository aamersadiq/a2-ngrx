import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routing } from './customer.route'
import { CustomerComponent } from './customer.component';


@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    routing,
    BrowserModule
  ],
  providers: [],
})
export class CustomerModule { }
