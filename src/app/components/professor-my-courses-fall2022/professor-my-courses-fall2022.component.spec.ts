import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorMyCoursesFall2022Component } from './professor-my-courses-fall2022.component';

describe('ProfessorMyCoursesFall2022Component', () => {
  let component: ProfessorMyCoursesFall2022Component;
  let fixture: ComponentFixture<ProfessorMyCoursesFall2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorMyCoursesFall2022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorMyCoursesFall2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
