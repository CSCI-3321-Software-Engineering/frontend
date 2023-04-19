import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { take } from 'rxjs';
import { DatabaseService  } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-student-course-search',
  templateUrl: './student-course-search.component.html',
  styleUrls: ['./student-course-search.component.css']
})
export class StudentCourseSearchComponent {
  public courses;
  @Inject(DOCUMENT) doc: Document
  constructor(private databaseService: DatabaseService) { 
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
    // console.log("test")

    
    const selectDeptElement = document.querySelector<HTMLSelectElement>('#departments');
    let selectedDeptIndex = selectDeptElement!.selectedIndex;
    let selectedDeptOptions = selectDeptElement!.selectedOptions;
    let selectedDeptValue = selectDeptElement!.options[selectedDeptIndex!].value;

    
    const selectHoursElement = document.querySelector<HTMLSelectElement>('#hours');
    let selectedHoursIndex = selectHoursElement!.selectedIndex;
    let selectedHoursOptions = selectHoursElement!.selectedOptions;
    let selectedHoursValue = selectHoursElement!.options[selectedHoursIndex!].value;

    
    const selectLevelElement = document.querySelector<HTMLSelectElement>('#level');
    let selectedLevelIndex = selectLevelElement!.selectedIndex;
    let selectedLevelOptions = selectLevelElement!.selectedOptions;
    let selectedLevelValue = selectLevelElement!.options[selectedLevelIndex!].value;

    
    const selectPrereqElement = document.querySelector<HTMLSelectElement>('#prereqs');
    let selectedPrereqIndex = selectPrereqElement!.selectedIndex;
    let selectedPrereqOptions = selectPrereqElement!.selectedOptions;
    let selectedPrereqValue = selectPrereqElement!.options[selectedPrereqIndex!].value;

    
    const selectDaysElement = document.querySelector<HTMLSelectElement>('#days');
    let selectedDaysIndex = selectDaysElement!.selectedIndex;
    let selectedDaysOptions = selectDaysElement!.selectedOptions;
    let selectedDaysValue = selectDaysElement!.options[selectedDaysIndex!].value;

    
    const selectPathwaysElement = document.querySelector<HTMLSelectElement>('#pathways');
    let selectedPathwaysIndex = selectPathwaysElement!.selectedIndex;
    let selectedPathwaysOptions = selectPathwaysElement!.selectedOptions;
    let selectedPathwaysValue = selectPathwaysElement!.options[selectedPathwaysIndex!].value;

    let selectedFilters = [selectedDeptValue, selectedHoursValue, selectedLevelValue, selectedPrereqValue, selectedDaysValue, selectedPathwaysValue]

    
    this.databaseService.searchCourses(selectedFilters)
      .pipe(take(1)).subscribe(res => {
        res.response
      })

    // ids.forEach(id => {
    //   console.log(id);
    //   var element = (<HTMLSelectElement>this.doc.getElementById(id)!);
    //   var selection = element.options[element.selectedIndex].text;
    //   Object.assign(dropdowns, {id:selection});
    // });

   
  }
}
