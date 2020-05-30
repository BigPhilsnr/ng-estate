import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsPeopleComponent } from './tenants-people.component';

describe('TenantsPeopleComponent', () => {
  let component: TenantsPeopleComponent;
  let fixture: ComponentFixture<TenantsPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantsPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantsPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
