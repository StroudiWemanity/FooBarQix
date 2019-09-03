import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContainCheckService {
  private static turn3IntoFoo(entry: string): string {
    return entry === '3' ? 'Foo' : '';
  }

  private static turn5IntoBar(entry: string): string {
    return entry === '5' ? 'Bar' : '';
  }

  private static turn7IntoQix(entry: string): string {
    return entry === '7' ? 'Qix' : '';
  }

  private static turn0IntoStar(entry: string): string {
    return entry === '0' ? '*' : '';
  }

  public turnAll(entry: number): string {
    let contentString = '';
    entry.toString().split('').map((char: string) => {
      contentString +=
        ContainCheckService.turn3IntoFoo(char) +
        ContainCheckService.turn5IntoBar(char) +
        ContainCheckService.turn7IntoQix(char) +
        ContainCheckService.turn0IntoStar(char);
    });
    return contentString;
  }
}
