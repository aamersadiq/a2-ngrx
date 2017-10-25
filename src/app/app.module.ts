import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';
import { RouterStoreModule } from '@ngrx/router-store';
import reducer from './reducers';

import { AppComponent } from './layouts';
import { routing } from './app.route'
import { PersonModule } from './person' 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    routing,
    BrowserModule,
    PersonModule,
    // StoreModule.provideStore(reducer),
    // StoreDevtoolsModule.instrumentStore({
    //   monitor: useLogMonitor({
    //     position: 'right',
    //     visible: true
    //   })
    // }),
    // RouterStoreModule.connectRouter(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
