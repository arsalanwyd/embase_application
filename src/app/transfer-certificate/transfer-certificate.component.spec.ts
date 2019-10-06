import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferCertificateComponent } from './transfer-certificate.component';

describe('TransferCertificateComponent', () => {
  let component: TransferCertificateComponent;
  let fixture: ComponentFixture<TransferCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
