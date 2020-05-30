import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryReportingComponent } from './query-reporting.component';

describe('QueryReportingComponent', () => {
  let component: QueryReportingComponent;
  let fixture: ComponentFixture<QueryReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
