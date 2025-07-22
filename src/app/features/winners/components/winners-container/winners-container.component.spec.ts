import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersContainerComponent } from './winners-container.component';

describe('WinnersContainerComponent', () => {
  let component: WinnersContainerComponent;
  let fixture: ComponentFixture<WinnersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnersContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
