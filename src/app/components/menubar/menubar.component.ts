import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  private base_route = this.router.url.split('/')[1]; 

  homeRedirect() {
    this.router.navigate(['']);
  }

  courseEditRedirect() {
    this.router.navigate([`${this.base_route}/edit`]);
  }

  courseListRedirect() {
    this.router.navigate([`${this.base_route}/courses`]);
  }

  userRedirect() {
    this.router.navigate([`${this.base_route}/user`]);
  }

}
