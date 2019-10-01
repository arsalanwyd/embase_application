import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAttendanceComponent } from './super-attendance.component';

describe('SuperAttendanceComponent', () => {
  let component: SuperAttendanceComponent;
  let fixture: ComponentFixture<SuperAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
