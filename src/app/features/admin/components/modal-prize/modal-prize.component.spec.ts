import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrizeComponent } from './modal-prize.component';

describe('ModalPrizeComponent', () => {
  let component: ModalPrizeComponent;
  let fixture: ComponentFixture<ModalPrizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPrizeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPrizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
