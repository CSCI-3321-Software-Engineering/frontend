import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorEditCoursesComponent } from './professor-edit-courses.component';

describe('ProfessorEditCoursesComponent', () => {
  let component: ProfessorEditCoursesComponent;
  let fixture: ComponentFixture<ProfessorEditCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorEditCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorEditCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
