import { TestBed } from '@angular/core/testing';

import { ButtonChangeQuantityService } from './button-change-quantity.service';

describe('ButtonChangeQuantityService', () => {
  let service: ButtonChangeQuantityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonChangeQuantityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
