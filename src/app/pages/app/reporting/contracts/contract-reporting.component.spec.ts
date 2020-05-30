import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractReportingComponent } from './contract-reporting.component';

describe('ContractReportingComponent', () => {
  let component: ContractReportingComponent;
  let fixture: ComponentFixture<ContractReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
