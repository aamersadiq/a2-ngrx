import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CourseComponent } from './course.component';

export const routes: Routes = [
    {
        path: '',
        component: CourseComponent,
        data: { title: 'Courses' }
    }
  ];

  export const routing: ModuleWithProviders = RouterModule.forChild(routes);