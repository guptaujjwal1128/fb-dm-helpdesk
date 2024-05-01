import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDHLoginComponent } from './login.component';

describe('FDHLoginComponent', () => {
  let component: FDHLoginComponent;
  let fixture: ComponentFixture<FDHLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FDHLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FDHLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
