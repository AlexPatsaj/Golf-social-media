import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashContProgressComponent } from './dash-cont-progress.component';

describe('DashContProgressComponent', () => {
  let component: DashContProgressComponent;
  let fixture: ComponentFixture<DashContProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashContProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashContProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
