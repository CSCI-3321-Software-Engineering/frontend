import { Component, ElementRef, Inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { take } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-student-my-courses',
  templateUrl: './student-my-courses.component.html',
  styleUrls: ['./student-my-courses.component.css']
})
export class StudentMyCoursesComponent {
  public courseObjs: any[] = [];
  public myCourses: any;
  public username;

  constructor(
    private loginService: LoginService,
    private cookieService: CookieService,
    private databaseConn: DatabaseService,
    @Inject(DOCUMENT) doc: Document
  ) { 

    this.username = this.cookieService.get('username');
    
    databaseConn.getCourses(this.username, true)
      .pipe(take(1)).subscribe(res => {
        const myRegistrationCourses = res.courses.split(" ");

        myRegistrationCourses.forEach((courseName: String) => {
          databaseConn.getCourse(courseName).pipe(take(1))
          .subscribe(res => {
            this.courseObjs.push(res);
          })
        });
      });

    databaseConn.getCourses(this.username, false)
      .pipe(take(1)).subscribe(res => {
        this.myCourses = res.courses.split(" ");
    });

  }

}
