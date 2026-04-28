import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswodlistComponent } from './passwodlist.component';

describe('PasswodlistComponent', () => {
  let component: PasswodlistComponent;
  let fixture: ComponentFixture<PasswodlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswodlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswodlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
