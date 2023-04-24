import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { take } from 'rxjs';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {

  times = ["8:00AM", "9:00AM", "10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM"]
  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  semesters = ["Spring 2023", "Fall 2022", "Spring 2022", "Fall 2021", "Spring 2021"]
  names = []
  classes: any[] = []

  constructor(private data: DatabaseService, private cookies: CookieService) {
    this.getCurrentClasses()
  }
  ngOnInit() { }

  getCourse(term: string) {
    this.classes = []
    for (let n of this.names) {
      this.data.getSemesterCourse(term, n).pipe(take(1)).subscribe({
        next: (course) => {
          this.classes.push(course)
          this.setTimeDict()
        }
      })
    }
  }
  getClasses(term: string) {
    this.data.getSemesterCourses(term, this.cookies.get("username"), false).pipe(take(1)).subscribe({
      next: (data) => {
        this.names = data.courses.split(" ")
        this.getCourse(term)
      }
    })
  }

  getCurrentCourse() {
    this.classes = []
    for (let n of this.names) {
      this.data.getCourse(n).pipe(take(1)).subscribe({
        next: (course) => {
          this.classes.push(course)
          this.setTimeDict()
        }
      })
    }
  }
  getCurrentClasses() {
    this.data.getCourses(this.cookies.get("username"), false).pipe(take(1)).subscribe({
      next: (data) => {
        this.names = data.courses.split(" ")
        this.getCurrentCourse()
      }
    })
  }

  switchSemester(sem: string) {
    document.getElementById("semestertitle")!.firstChild!.nodeValue = "SCHEDULE: " + sem + " "
    if (sem == this.semesters[0]) this.getCurrentClasses()
    else this.getClasses(sem)
  }

  daysdict(timeprefix: string) {
    return {
      "Monday":
        this.classes.filter(c => c.time.startsWith(timeprefix) && c.days.split(" ").includes("M"))[0],
      "Tuesday":
        this.classes.filter(c => c.time.startsWith(timeprefix) && c.days.split(" ").includes("T"))[0],
      "Wednesday":
        this.classes.filter(c => c.time.startsWith(timeprefix) && c.days.split(" ").includes("W"))[0],
      "Thursday":
        this.classes.filter(c => c.time.startsWith(timeprefix) && c.days.split(" ").includes("TR"))[0],
      "Friday":
        this.classes.filter(c => c.time.startsWith(timeprefix) && c.days.split(" ").includes("F"))[0],
    }
  }

  setTimeDict() {
    this.timedict = {
      "8:00AM": this.daysdict("8"),
      "9:00AM": this.daysdict("9"),
      "10:00AM": this.daysdict("10"),
      "11:00AM": this.daysdict("11"),
      "12:00PM": this.daysdict("12"),
      "1:00PM": this.daysdict("13"),
      "2:00PM": this.daysdict("14"),
      "3:00PM": this.daysdict("15"),
    }
  }

  timedict: Record<string, Record<string, any>> = {
    "8:00AM": this.daysdict("8"),
    "9:00AM": this.daysdict("9"),
    "10:00AM": this.daysdict("10"),
    "11:00AM": this.daysdict("11"),
    "12:00PM": this.daysdict("12"),
    "1:00PM": this.daysdict("13"),
    "2:00PM": this.daysdict("14"),
    "3:00PM": this.daysdict("15"),
  }

}
