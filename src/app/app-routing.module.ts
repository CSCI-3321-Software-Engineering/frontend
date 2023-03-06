import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfessorEditCoursesComponent } from './components/professor-edit-courses/professor-edit-courses.component';
import { ProfessorLandingComponent } from './components/professor-landing/professor-landing.component';
import { ProfessorMyCoursesComponent } from './components/professor-my-courses/professor-my-courses.component';
import { ProfessorUserComponent } from './components/professor-user/professor-user.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
