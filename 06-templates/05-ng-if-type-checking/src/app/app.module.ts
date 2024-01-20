import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DumbNgIfModule } from './dumb-ng-if/dumb-ng-if.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DumbNgIfModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
