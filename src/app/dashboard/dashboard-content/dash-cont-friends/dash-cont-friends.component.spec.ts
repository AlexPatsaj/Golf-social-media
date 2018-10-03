import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashContFriendsComponent } from './dash-cont-friends.component';

describe('DashContFriendsComponent', () => {
  let component: DashContFriendsComponent;
  let fixture: ComponentFixture<DashContFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashContFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashContFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
