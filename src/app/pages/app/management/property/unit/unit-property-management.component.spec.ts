import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitPropertyManagementComponent } from './unit-property-management.component';

describe('UnitPropertyManagementComponent', () => {
  let component: UnitPropertyManagementComponent;
  let fixture: ComponentFixture<UnitPropertyManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitPropertyManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitPropertyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
