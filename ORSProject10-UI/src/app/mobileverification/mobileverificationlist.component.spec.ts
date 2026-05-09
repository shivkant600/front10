import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileverificationlistComponent } from './mobileverificationlist.component';

describe('MobileverificationlistComponent', () => {
  let component: MobileverificationlistComponent;
  let fixture: ComponentFixture<MobileverificationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileverificationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileverificationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
