import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDialogModalComponent } from './nav-dialog-modal.component';

describe('NavDialogModalComponent', () => {
  let component: NavDialogModalComponent;
  let fixture: ComponentFixture<NavDialogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDialogModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavDialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
