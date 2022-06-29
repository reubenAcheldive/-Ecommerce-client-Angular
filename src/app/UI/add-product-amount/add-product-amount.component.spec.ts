import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductAmountComponent } from './add-product-amount.component';

describe('AddProductAmountComponent', () => {
  let component: AddProductAmountComponent;
  let fixture: ComponentFixture<AddProductAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
