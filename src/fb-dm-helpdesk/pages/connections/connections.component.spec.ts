import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDHConnectionsComponent } from './connections.component';

describe('FDHConnectionsComponent', () => {
  let component: FDHConnectionsComponent;
  let fixture: ComponentFixture<FDHConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FDHConnectionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FDHConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
