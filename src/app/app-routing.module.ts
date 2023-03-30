import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCoursesComponent } from './components/admin-courses/admin-courses.component';
import { AdminLandingComponent } from './components/admin-landing/admin-landing.component';
import { AdminProfessorsComponent } from './components/admin-professors/admin-professors.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { LoginComponent } from './components/login/login.component';
import { ProfessorCourseCheckoutComponent } from './components/professor-course-checkout/professor-course-checkout.component';
import { ProfessorCourseRegisterComponent } from './components/professor-course-register/professor-course-register.component';
import { ProfessorEditCoursesComponent } from './components/professor-edit-courses/professor-edit-courses.component';
import { ProfessorLandingComponent } from './components/professor-landing/professor-landing.component';
import { ProfessorMyCoursesComponent } from './components/professor-my-courses/professor-my-courses.component';
import { ProfessorUserComponent } from './components/professor-user/professor-user.component';
import { StudentCourseSearchComponent } from './components/student-course-search/student-course-search.component';
import { StudentLanding2Component } from './components/student-landing2/student-landing2.component';
import { StudentMyCoursesComponent } from './components/student-my-courses/student-my-courses.component';
import { StudentUserComponent } from './components/student-user/student-user.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'professor',
    component: ProfessorLandingComponent
  },
  {
    path: 'professor/user',
    component: ProfessorUserComponent
  },
  {
    path: 'professor/courses',
    component: ProfessorMyCoursesComponent
  },
  {
    path: 'professor/edit',
    component: ProfessorEditCoursesComponent
  },
  {
    path: 'professor/register',
    component: ProfessorCourseRegisterComponent
  },
  {
    path: 'professor/checkout',
    component: ProfessorCourseCheckoutComponent
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
  },
  {
    path: 'student/user',
    component: StudentUserComponent
  },
  {
    path: 'student/search',
    component: StudentCourseSearchComponent
  },
  {
    path: 'student/student-courses',
    component: StudentMyCoursesComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
