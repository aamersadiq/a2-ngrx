import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MaterialModule } from './blocks/material'
import { AppComponent } from './layouts';
import { routing } from './app.route'
import { AuthorModule } from './author' 
import { materialAnimationModules } from './blocks/material'
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
    MaterialModule,
    SharedModule,
    AuthorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
