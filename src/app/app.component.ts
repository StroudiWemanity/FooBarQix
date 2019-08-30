import { Component } from '@angular/core';
import {ContainCheckService} from './services/contain-check/contain-check.service';
import {DivisionCheckService} from './services/division-check/division-check.service';

@Component({
  selector: 'fbq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private divCheck: DivisionCheckService,
    private contCheck: ContainCheckService
  ) {}

  public compute(entry: number): string {
    const result = this.divCheck.turnAll(entry) + this.contCheck.turnAll(entry);
    return result ? result : entry.toString();
  }

}
