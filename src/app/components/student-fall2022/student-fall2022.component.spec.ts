import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFall2022Component } from './student-fall2022.component';

describe('StudentFall2022Component', () => {
  let component: StudentFall2022Component;
  let fixture: ComponentFixture<StudentFall2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFall2022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFall2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
