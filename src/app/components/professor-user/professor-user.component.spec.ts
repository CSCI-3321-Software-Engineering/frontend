import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorUserComponent } from './professor-user.component';

describe('ProfessorUserComponent', () => {
  let component: ProfessorUserComponent;
  let fixture: ComponentFixture<ProfessorUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
