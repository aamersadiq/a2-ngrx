import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule} from '../shared/shared.module'
import { routing } from './course.route'
import { CourseComponent } from './course.component';


@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    routing,
    CommonModule,
    SharedModule
  ],
  providers: [],
})
export class CourseModule { }
