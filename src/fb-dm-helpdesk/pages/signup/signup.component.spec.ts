import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDHSignupComponent } from './signup.component';

describe('FDHSignupComponent', () => {
  let component: FDHSignupComponent;
  let fixture: ComponentFixture<FDHSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FDHSignupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FDHSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
