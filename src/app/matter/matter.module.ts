import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routing } from './matter.route'
import { MatterComponent } from './matter.component';


@NgModule({
  declarations: [
    MatterComponent
  ],
  imports: [
    routing
  ],
  providers: [],
})
export class MatterModule { }
