import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorCourseCheckoutComponent } from './professor-course-checkout.component';

describe('ProfessorCourseCheckoutComponent', () => {
  let component: ProfessorCourseCheckoutComponent;
  let fixture: ComponentFixture<ProfessorCourseCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorCourseCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorCourseCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
