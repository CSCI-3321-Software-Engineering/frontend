import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCoursesComponent } from './components/admin-courses/admin-courses.component';
import { AdminLandingComponent } from './components/admin-landing/admin-landing.component';
import { AdminProfessorsComponent } from './components/admin-professors/admin-professors.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { LoginComponent } from './components/login/login.component';
import { StudentLanding2Component } from './components/student-landing2/student-landing2.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminLandingComponent
  },
  {
    path: 'admin/user',
    component: AdminUserComponent
  },
  {
    path: 'admin/courses',
    component: AdminCoursesComponent
  },
  {
    path: 'admin/professors',
    component: AdminProfessorsComponent
  },
  {
    path: 'student',
    component: StudentLanding2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
