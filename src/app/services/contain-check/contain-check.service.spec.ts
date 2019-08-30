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
    expect(service.turnAll(3)).toBe('Foo');
    expect(service.turnAll(13)).toBe('Foo');
    expect(service.turnAll(33)).toBe('FooFoo');
    expect(service.turnAll(6)).not.toBe('Foo');
  });

  it(`should return 'Bar' for each 5 entry contains`, () => {
    const service: ContainCheckService = TestBed.get(ContainCheckService);
    expect(service.turnAll(5)).toBe('Bar');
    expect(service.turnAll(15)).toBe('Bar');
    expect(service.turnAll(55)).toBe('BarBar');
    expect(service.turnAll(10)).not.toBe('Bar');
  });

  it(`should return 'Qix' for each 7 entry contains`, () => {
    const service: ContainCheckService = TestBed.get(ContainCheckService);
    expect(service.turnAll(7)).toBe('Qix');
    expect(service.turnAll(17)).toBe('Qix');
    expect(service.turnAll(77)).toBe('QixQix');
    expect(service.turnAll(10)).not.toBe('Qix');
  });
});
