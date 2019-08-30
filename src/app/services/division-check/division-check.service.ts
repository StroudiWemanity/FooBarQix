import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DivisionCheckService {
  public turn3IntoFoo(entry: number): string {
    return entry % 3 === 0 ? 'Foo' : '';
  }
}
