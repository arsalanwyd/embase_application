import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffBooksComponent } from './staff-books.component';

describe('StaffBooksComponent', () => {
  let component: StaffBooksComponent;
  let fixture: ComponentFixture<StaffBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
