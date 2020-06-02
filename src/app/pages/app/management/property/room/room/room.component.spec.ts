import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSingleComponent } from './room.component';

describe('RoomComponent', () => {
  let component: RoomSingleComponent;
  let fixture: ComponentFixture<RoomSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomSingleComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
