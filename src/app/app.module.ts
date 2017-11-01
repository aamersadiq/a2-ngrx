import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http'

import reducer from './reducers';
import { AppComponent } from './layouts';
import { routing } from './app.route'
import { AuthorModule } from './author' 
import { materialAnimationModules } from './shared/material/index'
import { SharedModule } from './shared/shared.module'

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
    StoreModule.provideStore(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
