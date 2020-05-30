import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintananceRequestComponent } from './maintanance-request.component';

describe('MaintananceRequestComponent', () => {
  let component: MaintananceRequestComponent;
  let fixture: ComponentFixture<MaintananceRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintananceRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintananceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
