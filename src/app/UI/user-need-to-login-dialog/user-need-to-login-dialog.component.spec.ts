import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNeedToLoginDialogComponent } from './user-need-to-login-dialog.component';

describe('UserNeedToLoginDialogComponent', () => {
  let component: UserNeedToLoginDialogComponent;
  let fixture: ComponentFixture<UserNeedToLoginDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNeedToLoginDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNeedToLoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
