import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CalenderComponent } from './components/calender/calender.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { AdminLandingComponent } from './components/admin-landing/admin-landing.component';
import { AdminMenubarComponent } from './components/admin-menubar/admin-menubar.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { AdminCoursesComponent } from './components/admin-courses/admin-courses.component';
import { AdminProfessorsComponent } from './components/admin-professors/admin-professors.component';
import { ProfessorLandingComponent } from './components/professor-landing/professor-landing.component';
import { ProfessorUserComponent } from './components/professor-user/professor-user.component';
import { ProfessorMyCoursesComponent } from './components/professor-my-courses/professor-my-courses.component';
import { ProfessorEditCoursesComponent } from './components/professor-edit-courses/professor-edit-courses.component';
import { ProfessorCourseRegisterComponent } from './components/professor-course-register/professor-course-register.component';
import { ProfessorCourseCheckoutComponent } from './components/professor-course-checkout/professor-course-checkout.component';
import { StudentLanding2Component } from './components/student-landing2/student-landing2.component';
import { StudentUserComponent } from './components/student-user/student-user.component';
import { StudentMyCoursesComponent } from './components/student-my-courses/student-my-courses.component';
import { StudentCourseSearchComponent } from './components/student-course-search/student-course-search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import { StudentFall2023Component } from './components/student-fall2023/student-fall2023.component';
import { StudentFall2022Component } from './components/student-fall2022/student-fall2022.component';
import { StudentMyCoursesFall2022Component } from './components/student-my-courses-fall2022/student-my-courses-fall2022.component';
import { StudentMyCoursesFall2023Component } from './components/student-my-courses-fall2023/student-my-courses-fall2023.component';
import { ProfessorFall2022Component } from './components/professor-fall2022/professor-fall2022.component';
import { ProfessorFall2023Component } from './components/professor-fall2023/professor-fall2023.component';
import { ProfessorMyCoursesFall2022Component } from './components/professor-my-courses-fall2022/professor-my-courses-fall2022.component';
import { ProfessorMyCoursesFall2023Component } from './components/professor-my-courses-fall2023/professor-my-courses-fall2023.component';


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
    ProfessorEditCoursesComponent,
    ProfessorCourseRegisterComponent,
    ProfessorCourseCheckoutComponent,
    AdminLandingComponent,
    StudentLanding2Component,
    StudentUserComponent,
    StudentMyCoursesComponent,
    StudentCourseSearchComponent,
    AdminMenubarComponent,
    AdminUserComponent,
    AdminCoursesComponent,
    AdminProfessorsComponent,
    ProfileComponent,
    AdvancedSearchComponent,
    StudentFall2023Component,
    StudentFall2022Component,
    StudentMyCoursesFall2022Component,
    StudentMyCoursesFall2023Component,
    ProfessorFall2022Component,
    ProfessorFall2023Component,
    ProfessorMyCoursesFall2022Component,
    ProfessorMyCoursesFall2023Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
