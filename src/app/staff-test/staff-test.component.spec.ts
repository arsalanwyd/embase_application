import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTestComponent } from './staff-test.component';

describe('StaffTestComponent', () => {
  let component: StaffTestComponent;
  let fixture: ComponentFixture<StaffTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
