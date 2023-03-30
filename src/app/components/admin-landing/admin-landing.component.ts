import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.css']
})
export class AdminLandingComponent {
  getLogs(): String[] { return ["Log1", "Log2", "Log3", "Log4", "Log5", "Log6", "Log7", "Log8", "Log9", "Log10", "Log11", "Log12", "Log13", "Log14", "Log15"] }
  logs = this.getLogs();
}
