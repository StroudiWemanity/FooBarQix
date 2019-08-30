import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DivisionCheckService} from './services/division-check/division-check.service';
import {ContainCheckService} from './services/contain-check/contain-check.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DivisionCheckService,
    ContainCheckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
