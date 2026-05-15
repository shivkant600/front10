import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartparkinglistComponent } from './smartparkinglist.component';

describe('SmartparkinglistComponent', () => {
  let component: SmartparkinglistComponent;
  let fixture: ComponentFixture<SmartparkinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartparkinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartparkinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
