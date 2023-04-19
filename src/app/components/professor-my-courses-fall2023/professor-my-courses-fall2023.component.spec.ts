import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorMyCoursesFall2023Component } from './professor-my-courses-fall2023.component';

describe('ProfessorMyCoursesFall2023Component', () => {
  let component: ProfessorMyCoursesFall2023Component;
  let fixture: ComponentFixture<ProfessorMyCoursesFall2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorMyCoursesFall2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorMyCoursesFall2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
