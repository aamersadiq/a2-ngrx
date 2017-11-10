import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../blocks/material'
import { routing } from './course.route'
import { CourseComponent } from './course.component';


@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    routing,
    CommonModule,
    MaterialModule
  ],
  providers: [],
})
export class CourseModule { }
