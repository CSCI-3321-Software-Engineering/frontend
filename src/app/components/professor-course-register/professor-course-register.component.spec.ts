import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorCourseRegisterComponent } from './professor-course-register.component';

describe('ProfessorCourseRegisterComponent', () => {
  let component: ProfessorCourseRegisterComponent;
  let fixture: ComponentFixture<ProfessorCourseRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorCourseRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorCourseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
