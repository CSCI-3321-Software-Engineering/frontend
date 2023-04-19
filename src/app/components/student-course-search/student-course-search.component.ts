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
    //document.getElementById("search");
    // Object.assign(dropdowns,{
    //     "search": (this.doc.getElementById("search")!.innerHTML)
    //   })
    // console.log("test")
    
    let selectedDeptValue = "Any";
    let selectedLevelValue = "Any";
    let selectedPrereqValue = "Any";
    let selectedDaysValue = "Any";
    let selectedHoursValue = "Any";
    let selectedPathwaysValue = "Any";

    const selectDeptElement = document.querySelector<HTMLSelectElement>('#departments');
    if (selectDeptElement) {    
      let selectedDeptIndex = selectDeptElement.selectedIndex;
      let selectedDeptOptions = selectDeptElement.selectedOptions;
      selectedDeptValue = selectDeptElement.options[selectedDeptIndex].value;
    } else {
      console.log("Department Element Undefined")
    } 
    
    const selectHoursElement = document.querySelector<HTMLSelectElement>('#hours');
    if (selectHoursElement) {
    let selectedHoursIndex = selectHoursElement!.selectedIndex;
    let selectedHoursOptions = selectHoursElement!.selectedOptions;
    selectedHoursValue = selectHoursElement!.options[selectedHoursIndex!].value;
    } else {
      console.log("Hours Element Undefined")
    }
    
    const selectLevelElement = document.querySelector<HTMLSelectElement>('#level');
    if(selectLevelElement) {
    let selectedLevelIndex = selectLevelElement!.selectedIndex;
    let selectedLevelOptions = selectLevelElement!.selectedOptions;
    selectedLevelValue = selectLevelElement!.options[selectedLevelIndex!].value;
    } else {
      console.log("Level Element Undefined")
    }
    
    const selectPrereqElement = document.querySelector<HTMLSelectElement>('#prereqs');
    if(selectPrereqElement) {
    let selectedPrereqIndex = selectPrereqElement!.selectedIndex;
    let selectedPrereqOptions = selectPrereqElement!.selectedOptions;
    selectedPrereqValue = selectPrereqElement!.options[selectedPrereqIndex!].value;
    } else {
      console.log("Hours Element Undefined")
    }
    
    const selectDaysElement = document.querySelector<HTMLSelectElement>('#days');
    if(selectDaysElement) {
    let selectedDaysIndex = selectDaysElement!.selectedIndex;
    let selectedDaysOptions = selectDaysElement!.selectedOptions;
    selectedDaysValue = selectDaysElement!.options[selectedDaysIndex!].value;
    } else {
      console.log("Hours Element Undefined")
    }
    
    const selectPathwaysElement = document.querySelector<HTMLSelectElement>('#pathways');
    if (selectPathwaysElement) {
    let selectedPathwaysIndex = selectPathwaysElement!.selectedIndex;
    let selectedPathwaysOptions = selectPathwaysElement!.selectedOptions;
    selectedPathwaysValue = selectPathwaysElement!.options[selectedPathwaysIndex!].value;
    } else {
      console.log("Hours Element Undefined")
    }
    
    let selectedFilters = [selectedDeptValue, selectedHoursValue, selectedLevelValue, selectedPrereqValue, selectedDaysValue, selectedPathwaysValue]
    
    this.databaseService.searchCourses(selectedFilters)
      .pipe(take(1)).subscribe(res => {
        res.response
        console.log(res.response.courseName)
      })

    // ids.forEach(id => {
    //   console.log(id);
    //   var element = (<HTMLSelectElement>this.doc.getElementById(id)!);
    //   var selection = element.options[element.selectedIndex].text;
    //   Object.assign(dropdowns, {id:selection});
    // });

   
  }
}
