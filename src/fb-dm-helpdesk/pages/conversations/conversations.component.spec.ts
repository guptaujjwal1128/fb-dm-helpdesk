import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDHConversationsComponent } from './conversations.component';

describe('FDHConversationsComponent', () => {
  let component: FDHConversationsComponent;
  let fixture: ComponentFixture<FDHConversationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FDHConversationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FDHConversationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
