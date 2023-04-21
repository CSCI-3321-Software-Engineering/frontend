import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { take } from 'rxjs';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-student-course-search',
  templateUrl: './student-course-search.component.html',
  styleUrls: ['./student-course-search.component.css']
})
export class StudentCourseSearchComponent {
  public courses;
  @Inject(DOCUMENT) doc: Document
  constructor(
    private databaseService: DatabaseService
  ) {
    this.courses = ["Course1", "Course2", "Course3", "Course4", "Course5", "Course6", "Course7", "Course8", "Course9", "Course10"]

  }

  search() {
    // id's : department, hours, level, prereqs, days, pathways
    var dropdowns = {};
    const ids = ["department", "hours", "level", "prereqs", "days", "pathways"];
    this.doc.getElementById("search");
    // Object.assign(dropdowns,{
    //     "search": (this.doc.getElementById("search")!.innerHTML)
    //   })
    console.log("test")

    this.databaseService.courseRegistration(ids)
      .pipe(take(1)).subscribe(res => {

      })

    // ids.forEach(id => {
    //   console.log(id);
    //   var element = (<HTMLSelectElement>this.doc.getElementById(id)!);
    //   var selection = element.options[element.selectedIndex].text;
    //   Object.assign(dropdowns, {id:selection});
    // });



  }
}
