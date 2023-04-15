import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorFall2022Component } from './professor-fall2022.component';

describe('ProfessorFall2022Component', () => {
  let component: ProfessorFall2022Component;
  let fixture: ComponentFixture<ProfessorFall2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorFall2022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorFall2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
