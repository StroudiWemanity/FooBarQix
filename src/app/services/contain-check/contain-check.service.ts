import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContainCheckService {
  public turn3IntoFoos(entry: number): string {
    let contentString = '';
    entry.toString().split('').map((char: string) => {
      if (char === '3') {
        contentString += 'Foo';
      }
    });
    return contentString;
  }
}
