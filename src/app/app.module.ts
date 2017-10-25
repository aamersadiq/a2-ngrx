import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './layouts';
import { routing } from './app.route'
import { OrderComponent } from './order/order.component';
import { CustomerModule } from './customer' 

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent
  ],
  imports: [
    routing,
    BrowserModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
