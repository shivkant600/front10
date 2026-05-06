import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginhistroylistComponent } from './loginhistroylist.component';

describe('LoginhistroylistComponent', () => {
  let component: LoginhistroylistComponent;
  let fixture: ComponentFixture<LoginhistroylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginhistroylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginhistroylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
