import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../blocks/material'
import { routing } from './author.route'
import { AuthorComponent } from './author.component';
import { AuthorListComponent } from './author-list//author-list.component';
import { AuthorSearchComponent } from './author-search/author-search.component';
import { AuthorEffects } from './store';
import { services } from './store'


@NgModule({
  declarations: [
    AuthorComponent,
    AuthorListComponent,
    AuthorSearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    EffectsModule.forRoot([AuthorEffects]),
  ],
  providers: [
    services
  ],
})
export class AuthorModule { }
