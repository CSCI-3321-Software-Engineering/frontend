import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CalenderComponent } from './components/calender/calender.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { ProfessorLandingComponent } from './components/professor-landing/professor-landing.component';
import { ProfessorUserComponent } from './components/professor-user/professor-user.component';
import { ProfessorMyCoursesComponent } from './components/professor-my-courses/professor-my-courses.component';
import { ProfessorEditCoursesComponent } from './components/professor-edit-courses/professor-edit-courses.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    CalenderComponent,
    MenubarComponent,
    ProfessorLandingComponent,
    ProfessorUserComponent,
    ProfessorMyCoursesComponent,
    ProfessorEditCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
