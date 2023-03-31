import { Component } from '@angular/core';

@Component({
  selector: 'app-student-course-search',
  templateUrl: './student-course-search.component.html',
  styleUrls: ['./student-course-search.component.css']
})
export class StudentCourseSearchComponent {
  constructor() { }
  ngOnInit() { }
  courses = ["Course1", "Course2", "Course3", "Course4", "Course5", "Course6", "Course7", "Course8", "Course9", "Course10"]
}
