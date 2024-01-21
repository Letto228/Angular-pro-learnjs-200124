import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  imports: [
    BrowserModule
  ],
})
export class AppModule {
  constructor(injector: Injector) {
    const helloElement = createCustomElement(HelloComponent, {injector});

    customElements.define('custom-hello', helloElement)
  }

  ngDoBootstrap() {}
}
