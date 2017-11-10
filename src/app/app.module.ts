import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from './core/store/meta.reducer';
import { AppComponent } from './layouts';
import { routing } from './app.route'
import { AuthorModule } from './author' 
import { materialAnimationModules } from './shared/material/index'
import { SharedModule } from './shared/shared.module'
import { environment } from '@env/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    routing,
    HttpModule,
    BrowserModule,
    materialAnimationModules,
    SharedModule,
    AuthorModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }) : [ ]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
