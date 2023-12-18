import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Com2Component } from './com-2/com-2.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent,Com2Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
