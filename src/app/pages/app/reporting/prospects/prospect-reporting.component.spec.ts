import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectReportingComponent } from './prospect-reporting.component';

describe('ProspectReportingComponent', () => {
  let component: ProspectReportingComponent;
  let fixture: ComponentFixture<ProspectReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
