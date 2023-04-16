import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorFall2023Component } from './professor-fall2023.component';

describe('ProfessorFall2023Component', () => {
  let component: ProfessorFall2023Component;
  let fixture: ComponentFixture<ProfessorFall2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorFall2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorFall2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
