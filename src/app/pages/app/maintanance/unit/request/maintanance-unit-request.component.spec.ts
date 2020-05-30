import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintananceUnitRequestComponent } from './maintanance-unit-request.component';

describe('MaintananceUnitRequestComponent', () => {
  let component: MaintananceUnitRequestComponent;
  let fixture: ComponentFixture<MaintananceUnitRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintananceUnitRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintananceUnitRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
