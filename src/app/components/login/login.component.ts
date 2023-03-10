import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute, 
    private router: Router
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
            // eventually need to port over to student landing here
            switch (username) {
              case "student": {
                this.router.navigate(['student']);
                break;
              }
              case "admin": {
                this.router.navigate(['admin']);
                break;
              }
              case "professor": {
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
