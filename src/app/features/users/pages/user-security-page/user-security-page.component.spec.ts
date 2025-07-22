import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSecurityPageComponent } from './user-security-page.component';

describe('UserSecurityPageComponent', () => {
  let component: UserSecurityPageComponent;
  let fixture: ComponentFixture<UserSecurityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSecurityPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSecurityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
