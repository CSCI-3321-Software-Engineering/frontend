import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { DatabaseService } from 'src/app/services/database/database.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-student-my-courses',
  templateUrl: './student-my-courses.component.html',
  styleUrls: ['./student-my-courses.component.css']
})
export class StudentMyCoursesComponent {
  public myCourses;
  public username;
  constructor(
    private loginService: LoginService,
    private cookieService: CookieService,
    private databaseConn: DatabaseService
  ) { 

    this.myCourses = this.getCourses();
    this.username = this.cookieService.get('username');
  }


  getCourses() {
    console.log(this.username);

    // this.databaseConn.getCourses(username).pipe(take(1))
    //   .subscribe({
    //     next: (data) => {
    //       console.log(data);
    //     },
    //     error: (error) => { console.log(error) }
    //   })

    return [[1,1],[2,2],[3,3]]
  }

}
