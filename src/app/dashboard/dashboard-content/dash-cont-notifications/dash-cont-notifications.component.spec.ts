import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashContNotificationsComponent } from './dash-cont-notifications.component';

describe('DashContNotificationsComponent', () => {
  let component: DashContNotificationsComponent;
  let fixture: ComponentFixture<DashContNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashContNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashContNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
