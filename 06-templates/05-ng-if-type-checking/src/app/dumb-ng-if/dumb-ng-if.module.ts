import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DumbNgIfDirective } from './dumb-ng-if.directive';

@NgModule({
  declarations: [
    DumbNgIfDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DumbNgIfDirective
  ],
})
export class DumbNgIfModule { }
