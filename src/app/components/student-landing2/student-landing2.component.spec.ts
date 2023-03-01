import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLanding2Component } from './student-landing2.component';

describe('StudentLanding2Component', () => {
  let component: StudentLanding2Component;
  let fixture: ComponentFixture<StudentLanding2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLanding2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLanding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
