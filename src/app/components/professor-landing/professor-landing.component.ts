import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-professor-landing',
  templateUrl: './professor-landing.component.html',
  styleUrls: ['./professor-landing.component.css']
})
export class ProfessorLandingComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

}
