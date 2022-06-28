import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonQuantityComponent } from './button-quantity.component';

describe('ButtonQuantityComponent', () => {
  let component: ButtonQuantityComponent;
  let fixture: ComponentFixture<ButtonQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
