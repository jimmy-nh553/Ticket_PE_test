import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemsListPageComponent } from './admin-items-list-page.component';

describe('AdminItemsListPageComponent', () => {
  let component: AdminItemsListPageComponent;
  let fixture: ComponentFixture<AdminItemsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminItemsListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminItemsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
