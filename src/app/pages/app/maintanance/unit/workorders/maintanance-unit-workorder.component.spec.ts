import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintananceUnitWorkorderComponent } from './maintanance-unit-workorder.component';

describe('MaintananceUnitWorkorderComponent', () => {
  let component: MaintananceUnitWorkorderComponent;
  let fixture: ComponentFixture<MaintananceUnitWorkorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintananceUnitWorkorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintananceUnitWorkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
