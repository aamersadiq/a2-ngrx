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
import { AuthorModule } from './author' 
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    routing,
    BrowserModule,
    SharedModule,
    AuthorModule,
    StoreModule.provideStore(reducer),
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
