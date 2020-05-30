import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestReportingComponent } from './request-reporting.component';

describe('RequestReportingComponent', () => {
  let component: RequestReportingComponent;
  let fixture: ComponentFixture<RequestReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
