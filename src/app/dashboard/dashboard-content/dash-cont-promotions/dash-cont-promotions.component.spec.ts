import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashContPromotionsComponent } from './dash-cont-promotions.component';

describe('DashContPromotionsComponent', () => {
  let component: DashContPromotionsComponent;
  let fixture: ComponentFixture<DashContPromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashContPromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashContPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
