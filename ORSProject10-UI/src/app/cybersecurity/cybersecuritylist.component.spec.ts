import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CybersecuritylistComponent } from './cybersecuritylist.component';

describe('CybersecuritylistComponent', () => {
  let component: CybersecuritylistComponent;
  let fixture: ComponentFixture<CybersecuritylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CybersecuritylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CybersecuritylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
