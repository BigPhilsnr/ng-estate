import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceReportingComponent } from './compliance-reporting.component';

describe('ComplianceReportingComponent', () => {
  let component: ComplianceReportingComponent;
  let fixture: ComponentFixture<ComplianceReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplianceReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
