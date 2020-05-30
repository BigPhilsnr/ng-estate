import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandPropertyManagementComponent } from './land-property-management.component';

describe('LandPropertyManagementComponent', () => {
  let component: LandPropertyManagementComponent;
  let fixture: ComponentFixture<LandPropertyManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandPropertyManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandPropertyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
