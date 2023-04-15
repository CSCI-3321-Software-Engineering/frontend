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
import { StudentFall2023Component } from './components/student-fall2023/student-fall2023.component';
import { StudentFall2022Component } from './components/student-fall2022/student-fall2022.component';
import { StudentMyCoursesFall2022Component } from './components/student-my-courses-fall2022/student-my-courses-fall2022.component';
import { StudentMyCoursesFall2023Component } from './components/student-my-courses-fall2023/student-my-courses-fall2023.component';
import { ProfessorFall2022Component } from './components/professor-fall2022/professor-fall2022.component';
import { ProfessorFall2023Component } from './components/professor-fall2023/professor-fall2023.component';
import { ProfessorMyCoursesFall2022Component } from './components/professor-my-courses-fall2022/professor-my-courses-fall2022.component';
import { ProfessorMyCoursesFall2023Component } from './components/professor-my-courses-fall2023/professor-my-courses-fall2023.component';

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
    path: 'professor/fall2022',
    component: ProfessorFall2022Component
  },
  {
    path: 'professor/fall2023',
    component: ProfessorFall2023Component
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
    path: 'professor/courses/fall2022',
    component: ProfessorMyCoursesFall2022Component
  },
  {
    path: 'professor/courses/fall2023',
    component: ProfessorMyCoursesFall2023Component
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
    path: 'student/fall2023',
    component: StudentFall2023Component
  },
  {
    path: 'student/fall2022',
    component: StudentFall2022Component
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
    path: 'student/student-courses/fall2022',
    component: StudentMyCoursesFall2022Component
  },
  {
    path: 'student/student-courses/fall2023',
    component: StudentMyCoursesFall2023Component
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
