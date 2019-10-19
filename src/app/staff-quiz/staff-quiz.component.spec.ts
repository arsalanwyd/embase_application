import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffQuizComponent } from './staff-quiz.component';

describe('StaffQuizComponent', () => {
  let component: StaffQuizComponent;
  let fixture: ComponentFixture<StaffQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
