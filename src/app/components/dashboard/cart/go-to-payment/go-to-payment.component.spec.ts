import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToPaymentComponent } from './go-to-payment.component';

describe('GoToPaymentComponent', () => {
  let component: GoToPaymentComponent;
  let fixture: ComponentFixture<GoToPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoToPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
