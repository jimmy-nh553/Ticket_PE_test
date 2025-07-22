import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFooterContainerComponent } from './header-footer-container.component';

describe('HeaderFooterContainerComponent', () => {
  let component: HeaderFooterContainerComponent;
  let fixture: ComponentFixture<HeaderFooterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFooterContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFooterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
