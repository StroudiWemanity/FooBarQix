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

  it(`should return 'Bar' when entry is divisible by 5`, () => {
    const service: DivisionCheckService = TestBed.get(DivisionCheckService);
    expect(service.turn5IntoBar(5)).toBe('Bar');
    expect(service.turn5IntoBar(10)).toBe('Bar');
    expect(service.turn5IntoBar(12)).not.toBe('Bar');
  });

  it(`should return 'Qix' when entry is divisible by 7`, () => {
    const service: DivisionCheckService = TestBed.get(DivisionCheckService);
    expect(service.turn7IntoQix(7)).toBe('Qix');
    expect(service.turn7IntoQix(21)).toBe('Qix');
    expect(service.turn7IntoQix(20)).not.toBe('Qix');
  });

  it(`should be able to combine all the above`, () => {
    const service: DivisionCheckService = TestBed.get(DivisionCheckService);
    expect(service.turnAll(7)).toBe('Qix');
    expect(service.turnAll(15)).toBe('FooBar');
    expect(service.turnAll(21)).toBe('FooQix');
    expect(service.turnAll(105)).toBe('FooBarQix');
    expect(service.turnAll(13)).toBe('');
  });
});
