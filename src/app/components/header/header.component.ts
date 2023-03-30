import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private login: LoginService,
    private cookies: CookieService
  ) { }
  
  logout() {
    this.login.isloggedin = false;
    this.cookies.deleteAll('/');
    this.router.navigate(['']);
  }
}
