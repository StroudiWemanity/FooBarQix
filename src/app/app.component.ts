import { Component } from '@angular/core';
import {ContainCheckService} from './services/contain-check/contain-check.service';
import {DivisionCheckService} from './services/division-check/division-check.service';

@Component({
  selector: 'fbq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public turn0intoStars(entry: string): string {
    return entry.replace(/0/g, '*');
  }

  constructor(
    private divCheck: DivisionCheckService,
    private contCheck: ContainCheckService
  ) {}

  public compute(entry: number): string {
    let result = this.divCheck.turnAll(entry) + this.contCheck.turnAll(entry);
    result = this.filterStars(result);
    return result ? result : this.turn0intoStars(entry.toString());
  }

  public filterStars(entry: string): string {
    return entry.match(/^\*+$/) ? '' : entry;
  }
}
