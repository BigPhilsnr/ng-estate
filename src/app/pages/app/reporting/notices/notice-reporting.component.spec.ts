import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeReportingComponent } from './notice-reporting.component';

describe('NoticeReportingComponent', () => {
  let component: NoticeReportingComponent;
  let fixture: ComponentFixture<NoticeReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
