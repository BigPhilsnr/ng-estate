import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingPaymentsComponent } from './incoming-payments.component';

describe('IncomingPaymentsComponent', () => {
  let component: IncomingPaymentsComponent;
  let fixture: ComponentFixture<IncomingPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
