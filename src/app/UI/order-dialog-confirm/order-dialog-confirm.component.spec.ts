import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDialogConfirmComponent } from './order-dialog-confirm.component';

describe('OrderDialogConfirmComponent', () => {
  let component: OrderDialogConfirmComponent;
  let fixture: ComponentFixture<OrderDialogConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDialogConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDialogConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
