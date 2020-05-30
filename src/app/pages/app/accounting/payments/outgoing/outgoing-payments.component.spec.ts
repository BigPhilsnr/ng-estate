import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingPaymentsComponent } from './outgoing-payments.component';

describe('OutgoingPaymentsComponent', () => {
  let component: OutgoingPaymentsComponent;
  let fixture: ComponentFixture<OutgoingPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutgoingPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgoingPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
