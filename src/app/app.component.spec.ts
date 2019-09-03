import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

describe('compute function', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  }));

  it(`should compute '3' into 'FooFoo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.compute(3)).toBe('FooFoo');
  });

  it(`should compute '7' into 'QixQix'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.compute(7)).toBe('QixQix');
  });

  it(`should compute '15' into 'FooBarBar'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.compute(15)).toBe('FooBarBar');
  });

  it(`should compute '51' into 'FooBar'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.compute(51)).toBe('FooBar');
  });

  it(`should not compute '8' into something else`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.compute(8)).toBe('8');
  });

  it(`should compute 0 into 'FooBarQix*'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.compute(0)).toBe('FooBarQix*');
  });

  it(`should compute 101 into '1*1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.compute(101)).toBe('1*1');
  });

  it(`should compute 303 into 'FooFoo*Foo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.compute(303)).toBe('FooFoo*Foo');
  });

  it(`should compute 105 into 'FooBarQix*Bar'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.compute(105)).toBe('FooBarQix*Bar');
  });

  it(`should filter a '*' only result into numbers and stars`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.filterStars('**')).toBe('');
  });

});
