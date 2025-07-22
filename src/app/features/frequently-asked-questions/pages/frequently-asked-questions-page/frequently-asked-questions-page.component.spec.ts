import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyAskedQuestionsPageComponent } from './frequently-asked-questions-page.component';

describe('FrequentlyAskedQuestionsPageComponent', () => {
  let component: FrequentlyAskedQuestionsPageComponent;
  let fixture: ComponentFixture<FrequentlyAskedQuestionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrequentlyAskedQuestionsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequentlyAskedQuestionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
