import { Component } from '@angular/core';
import { take } from 'rxjs';
import { DatabaseService } from 'src/app/services/database/database.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public username: String = "backend not running";
  public email: String = "backend not running";
  public password: String = "backend not running";
  public id: String = "backend not running";
  constructor(
    private databaseConn: DatabaseService,
    private cookieService: CookieService
  ) {
    const obj = this.getUserInfo();
  }

  getUserInfo() {

    // API endpoint not functioning yet
    this.databaseConn.getUserInfo(this.cookieService.get('username')).pipe(take(1)).subscribe({
      next: (data) => {
        console.log(data)
        this.username = data.username;
        this.email = data.email;
        this.password = data.password;
        this.id = data.id;
      }
    })
  }
}
