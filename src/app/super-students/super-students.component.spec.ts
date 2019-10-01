import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperStudentsComponent } from './super-students.component';

describe('SuperStudentsComponent', () => {
  let component: SuperStudentsComponent;
  let fixture: ComponentFixture<SuperStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
