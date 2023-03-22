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
import { AdminLandingComponent } from './components/admin-landing/admin-landing.component';
import { StudentLanding2Component } from './components/student-landing2/student-landing2.component';
import { AdminMenubarComponent } from './components/admin-menubar/admin-menubar.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { AdminCoursesComponent } from './components/admin-courses/admin-courses.component';
import { AdminProfessorsComponent } from './components/admin-professors/admin-professors.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    CalenderComponent,
    MenubarComponent,
    AdminLandingComponent,
    StudentLanding2Component,
    AdminMenubarComponent,
    AdminUserComponent,
    AdminCoursesComponent,
    AdminProfessorsComponent
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
