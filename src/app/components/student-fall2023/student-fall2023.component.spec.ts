import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFall2023Component } from './student-fall2023.component';

describe('StudentFall2023Component', () => {
  let component: StudentFall2023Component;
  let fixture: ComponentFixture<StudentFall2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFall2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFall2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
