import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './components/admin-landing-component/admin-landing-component.component';
import { LoginComponent } from './components/login/login.component';
import { ProfessorCourseCheckoutComponent } from './components/professor-course-checkout/professor-course-checkout.component';
import { ProfessorCourseRegisterComponent } from './components/professor-course-register/professor-course-register.component';
import { ProfessorEditCoursesComponent } from './components/professor-edit-courses/professor-edit-courses.component';
import { ProfessorLandingComponent } from './components/professor-landing/professor-landing.component';
import { ProfessorMyCoursesComponent } from './components/professor-my-courses/professor-my-courses.component';
import { ProfessorUserComponent } from './components/professor-user/professor-user.component';
import { StudentLanding2Component } from './components/student-landing2/student-landing2.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'professor-landing',
    component: ProfessorLandingComponent
  },
  {
    path: 'professor-user',
    component: ProfessorUserComponent
  },
  {
    path: 'professor-my-courses',
    component: ProfessorMyCoursesComponent
  },
  {
    path: 'professor-edit-courses',
    component: ProfessorEditCoursesComponent
  },
  {
    path: 'professor-course-register',
    component: ProfessorCourseRegisterComponent
  },
  {
    path: 'professor-course-checkout',
    component: ProfessorCourseCheckoutComponent
  },
  {
    path: 'admin',
    component: AdminLandingComponent
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
