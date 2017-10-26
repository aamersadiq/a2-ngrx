import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './person.route'
import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list//person-list.component';
import { PersonActions} from './actions/';
import { PeopleEffects} from './effects/';


@NgModule({
  declarations: [
    PersonComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    routing,
    EffectsModule.run(PeopleEffects),
  ],
  providers: [
    PersonActions
  ],
})
export class PersonModule { }
