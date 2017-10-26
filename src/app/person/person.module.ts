import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routing } from './person.route'
import { PersonComponent } from './person.component';
import actions from './actions';


@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    routing
  ],
  providers: [
    actions
  ],
})
export class PersonModule { }
