import { TestBed } from '@angular/core/testing';

import { DivisionCheckService } from './division-check.service';

describe('DivisionCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DivisionCheckService = TestBed.get(DivisionCheckService);
    expect(service).toBeTruthy();
  });

  it(`should return 'Foo' when entry is divisible by 3`, () => {
    const service: DivisionCheckService = TestBed.get(DivisionCheckService);
    expect(service.turn3IntoFoo(3)).toBe('Foo');
    expect(service.turn3IntoFoo(6)).toBe('Foo');
    expect(service.turn3IntoFoo(8)).not.toBe('Foo');
  });
});
