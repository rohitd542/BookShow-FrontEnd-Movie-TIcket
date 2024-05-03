import { ComponentFixture, TestBed } from '@angular/core/testing';

import { signupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: signupComponent;
  let fixture: ComponentFixture<signupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ signupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(signupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
