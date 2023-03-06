import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorMyCoursesComponent } from './professor-my-courses.component';

describe('ProfessorMyCoursesComponent', () => {
  let component: ProfessorMyCoursesComponent;
  let fixture: ComponentFixture<ProfessorMyCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorMyCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorMyCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
