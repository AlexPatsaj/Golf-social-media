import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashContUpdatesComponent } from './dash-cont-updates.component';

describe('DashContUpdatesComponent', () => {
  let component: DashContUpdatesComponent;
  let fixture: ComponentFixture<DashContUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashContUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashContUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
