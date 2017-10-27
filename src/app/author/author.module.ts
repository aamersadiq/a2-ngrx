import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './author.route'
import { AuthorComponent } from './author.component';
import { AuthorListComponent } from './author-list//author-list.component';
import { AuthorSearchComponent } from './author-search/author-search.component';
import { AuthorActions} from './actions/';
import { PeopleEffects} from './effects/';


@NgModule({
  declarations: [
    AuthorComponent,
    AuthorListComponent,
    AuthorSearchComponent
  ],
  imports: [
    BrowserModule,
    routing,
    EffectsModule.run(PeopleEffects),
  ],
  providers: [
    AuthorActions
  ],
})
export class AuthorModule { }
