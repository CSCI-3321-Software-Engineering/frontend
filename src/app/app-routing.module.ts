import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentLanding2Component } from './components/student-landing2/student-landing2.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
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
