import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { routing } from './person.route'
import { PersonComponent } from './person.component';
import { PersonActions} from './actions/';
import { PeopleEffects} from './effects/';


@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    routing,
    EffectsModule.run(PeopleEffects),
  ],
  providers: [
    PersonActions
  ],
})
export class PersonModule { }
