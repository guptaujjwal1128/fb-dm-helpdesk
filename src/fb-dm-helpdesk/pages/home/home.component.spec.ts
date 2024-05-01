import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDHHomeComponent } from './home.component';

describe('FDHHomeComponent', () => {
  let component: FDHHomeComponent;
  let fixture: ComponentFixture<FDHHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FDHHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FDHHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
