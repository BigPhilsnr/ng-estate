import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePeopleComponent } from './employee-people.component';

describe('EmployeePeopleComponent', () => {
  let component: EmployeePeopleComponent;
  let fixture: ComponentFixture<EmployeePeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
