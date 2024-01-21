import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HelloComponent {
  @Input() name: string = '';
  @Output() clicked = new EventEmitter<string>();
}
