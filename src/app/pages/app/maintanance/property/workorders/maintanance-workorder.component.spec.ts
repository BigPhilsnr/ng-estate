import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintananceWorkorderComponent } from './maintanance-workorder.component';

describe('MaintananceWorkorderComponent', () => {
  let component: MaintananceWorkorderComponent;
  let fixture: ComponentFixture<MaintananceWorkorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintananceWorkorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintananceWorkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
