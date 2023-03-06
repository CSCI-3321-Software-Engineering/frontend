import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfessorLandingComponent } from './components/professor-landing/professor-landing.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'professor-landing',
    component: ProfessorLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
