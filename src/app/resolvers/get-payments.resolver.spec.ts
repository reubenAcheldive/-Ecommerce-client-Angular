import { TestBed } from '@angular/core/testing';

import { GetPaymentsResolver } from './get-payments.resolver';

describe('GetPaymentsResolver', () => {
  let resolver: GetPaymentsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetPaymentsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
