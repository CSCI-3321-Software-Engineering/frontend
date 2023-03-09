import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLandingComponent } from './admin-landing-component.component';

describe('AdminLandingComponentComponent', () => {
  let component: AdminLandingComponent;
  let fixture: ComponentFixture<AdminLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminLandingComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
