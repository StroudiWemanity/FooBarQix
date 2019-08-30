import { TestBed } from '@angular/core/testing';

import { ContainCheckService } from './contain-check.service';

describe('ContainCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContainCheckService = TestBed.get(ContainCheckService);
    expect(service).toBeTruthy();
  });

  it(`should return 'Foo' for each 3 entry contains`, () => {
    const service: ContainCheckService = TestBed.get(ContainCheckService);
    expect(service.turn3IntoFoos(3)).toBe('Foo');
    expect(service.turn3IntoFoos(13)).toBe('Foo');
    expect(service.turn3IntoFoos(33)).toBe('FooFoo');
    expect(service.turn3IntoFoos(6)).not.toBe('Foo');
  });
});
