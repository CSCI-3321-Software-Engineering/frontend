import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private message: string = "";
  constructor(
    private loginService: LoginService
  ) { }

  checkLogin() {
    this.loginService.validateLogin().subscribe({
      next: (data) => {
        // const obj = JSON.parse(data as string);
        // this.message = obj.msg;

        // already parses "data" as JSON object ^^^
        // no need to use JSON.parse
        console.log(data.msg);
      },
      error: (error) => { console.log(error) }
    })
  }
}
