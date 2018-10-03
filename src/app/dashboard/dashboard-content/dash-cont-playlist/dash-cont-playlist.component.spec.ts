import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashContPlaylistComponent } from './dash-cont-playlist.component';

describe('DashContPlaylistComponent', () => {
  let component: DashContPlaylistComponent;
  let fixture: ComponentFixture<DashContPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashContPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashContPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
