import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routing } from './person.route'
import { PersonComponent } from './person.component';


@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    routing
  ],
  providers: [],
})
export class PersonModule { }
