import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrizesListPageComponent } from './admin-prizes-list-page.component';

describe('AdminPrizesListPageComponent', () => {
  let component: AdminPrizesListPageComponent;
  let fixture: ComponentFixture<AdminPrizesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPrizesListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPrizesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
