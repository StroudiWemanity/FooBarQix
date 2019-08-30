import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DivisionCheckService {
  public turn3IntoFoo(entry: number): string {
    return entry % 3 === 0 ? 'Foo' : '';
  }

  public turn5IntoBar(entry: number): string {
    return entry % 5 === 0 ? 'Bar' : '';
  }

  public turn7IntoQix(entry: number): string {
    return entry % 7 === 0 ? 'Qix' : '';
  }

  public turnAll(entry: number): string {
    return this.turn3IntoFoo(entry) + this.turn5IntoBar(entry) + this.turn7IntoQix(entry);
  }
}
