import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemittanceVerificationComponent } from './remittance-verification.component';

describe('RemittanceVerificationComponent', () => {
  let component: RemittanceVerificationComponent;
  let fixture: ComponentFixture<RemittanceVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemittanceVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemittanceVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
