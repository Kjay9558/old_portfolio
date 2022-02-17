import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingExperienceComponent } from './programming-experience.component';

describe('ProgrammingExperienceComponent', () => {
  let component: ProgrammingExperienceComponent;
  let fixture: ComponentFixture<ProgrammingExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
