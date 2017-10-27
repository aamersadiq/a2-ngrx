import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routing } from './course.route'
import { CourseComponent } from './course.component';


@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    routing
  ],
  providers: [],
})
export class CourseModule { }
