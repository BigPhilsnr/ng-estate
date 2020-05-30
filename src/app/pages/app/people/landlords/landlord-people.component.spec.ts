import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordPeopleComponent } from './landlord-people.component';

describe('LandlordPeopleComponent', () => {
  let component: LandlordPeopleComponent;
  let fixture: ComponentFixture<LandlordPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
