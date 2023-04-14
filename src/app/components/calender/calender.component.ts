import { Component } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
  constructor() {
  }
  ngOnInit() { }

  times = ["8:00AM", "9:00AM", "10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM"]
  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  getClasses() {
    return [
      { days: ["F"], time: "9:00-10:20", code: "MTP-42069", name: "Mary Tish Class", prof: ["Mary Tish"].join(", "), color: "lightred" },
      { days: ["M", "T", "W", "TR", "F"], time: "10:00-11:20", code: "FYE-1020", name: "What We Know That Just Ain't So", prof: ["Seth Fogarty", "Courtney Salinas"].join(", "), color: "sky" },
      { days: ["T", "TR"], time: "2:10-3:25", code: "CSCI-1320", name: "Principles of Computer Science I", prof: ["Matthew Hibbs"].join(", "), color: "orange" },
      { days: ["M", "W"], time: "9:05-10:20", code: "BAT-3303", name: "Business Analytics", prof: ["Tianxi Dong"].join(", "), color: "pink" }
    ]
  }

  classes = this.getClasses();

  daysdict(timeprefix: string) {
    return {
      "Monday":
        this.classes.filter(c => c.time.startsWith(timeprefix) && c.days.includes("M")),
      "Tuesday":
        this.classes.filter(c => c.time.startsWith(timeprefix) && c.days.includes("T")),
      "Wednesday":
        this.classes.filter(c => c.time.startsWith(timeprefix) && c.days.includes("W")),
      "Thursday":
        this.classes.filter(c => c.time.startsWith(timeprefix) && c.days.includes("TR")),
      "Friday":
        this.classes.filter(c => c.time.startsWith(timeprefix) && c.days.includes("F")),
    }
  }

  timedict: Record<string, Record<string, any>> = {
    "8:00AM": this.daysdict("8:"),
    "9:00AM": this.daysdict("9:"),
    "10:00AM": this.daysdict("10:"),
    "11:00AM": this.daysdict("11:"),
    "12:00PM": this.daysdict("12:"),
    "1:00PM": this.daysdict("1:"),
    "2:00PM": this.daysdict("2:"),
    "3:00PM": this.daysdict("3:"),
  }

}
