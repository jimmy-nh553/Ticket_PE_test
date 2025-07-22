import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeContainerComponent } from './prize-container.component';

describe('PrizeContainerComponent', () => {
  let component: PrizeContainerComponent;
  let fixture: ComponentFixture<PrizeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizeContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrizeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
