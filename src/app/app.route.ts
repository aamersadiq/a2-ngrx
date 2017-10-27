import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: 'courses',
        loadChildren: 'app/course/course.module#CourseModule',
        data: { title: 'Courses' }
    },
    {
        path: '',
        redirectTo: '/authors',
        pathMatch: 'full'
    },
    // { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: NoPreloading
  });