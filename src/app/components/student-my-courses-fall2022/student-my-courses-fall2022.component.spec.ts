import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMyCoursesFall2022Component } from './student-my-courses-fall2022.component';

describe('StudentMyCoursesFall2022Component', () => {
  let component: StudentMyCoursesFall2022Component;
  let fixture: ComponentFixture<StudentMyCoursesFall2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMyCoursesFall2022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentMyCoursesFall2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
