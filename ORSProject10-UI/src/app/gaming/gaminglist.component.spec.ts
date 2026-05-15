import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaminglistComponent } from './gaminglist.component';

describe('GaminglistComponent', () => {
  let component: GaminglistComponent;
  let fixture: ComponentFixture<GaminglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaminglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaminglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
