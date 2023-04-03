import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute, 
    private router: Router,
    private cookieService: CookieService,
  ) { }

  checkLogin(data: any) {
    const username = data.username;
    const password = data.password;

    this.loginService.validateLogin(username, password).pipe(take(1))
      .subscribe({
        next: (data) => {
          // data contains a boolean in json that tells if user/password combo is correct
          if (data.valid) {
            console.log("login was valid");
            this.loginService.isloggedin = true;

            this.cookieService.set('username', username);
            this.cookieService.set('password', password);
            console.log(this.cookieService.get('username'));
            console.log(this.cookieService.get('password'));

            
            // eventually need to port over to student landing here
            switch (data.userType) {
              case "s": {
                this.router.navigate(['student']);
                break;
              }
              case "a": {
                this.router.navigate(['admin']);
                break;
              }
              case "p": {
                this.router.navigate(['professor']);
                break;
              }
            }

            
          } else {
            // need to display error message here
            console.log("incorrect username and password");
          }
        },
      error: (error) => { console.log(error) }
    })
  }


}
