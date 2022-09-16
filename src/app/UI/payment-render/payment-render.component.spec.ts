import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRenderComponent } from './payment-render.component';

describe('PaymentRenderComponent', () => {
  let component: PaymentRenderComponent;
  let fixture: ComponentFixture<PaymentRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
