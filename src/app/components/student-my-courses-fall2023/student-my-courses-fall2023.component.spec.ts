import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMyCoursesFall2023Component } from './student-my-courses-fall2023.component';

describe('StudentMyCoursesFall2023Component', () => {
  let component: StudentMyCoursesFall2023Component;
  let fixture: ComponentFixture<StudentMyCoursesFall2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMyCoursesFall2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentMyCoursesFall2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
