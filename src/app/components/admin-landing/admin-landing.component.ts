import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { firstValueFrom, take } from 'rxjs';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.css']
})
export class AdminLandingComponent {
  constructor(
    private databaseService: DatabaseService,
  ) {

  }

  async getLogs(): Promise<String[]> {
    const res = await firstValueFrom(this.databaseService.getLogs());
    console.log(res);
    return res.response;
  }

  logs: any[] = [];

  async ngOnInit() {
    this.logs = await this.getLogs();
  }

}
