import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private message: string = "";
  constructor(
    private loginService: LoginService
  ) { }

  checkLogin(data: any) {
    const username = data.username;
    const password = data.password;

    this.loginService.validateLogin(username, password).subscribe({
      next: (data) => {
        // data contains a boolean in json that tells if user/password combo is correct
        if (data.result == true) {
          // eventually need to port over to student landing here
          console.log("correct username and password");
        } else {
          // need to display error message here
          console.log("incorrect username and password");
        }
      },
      error: (error) => { console.log(error) }
    })
  }
}
