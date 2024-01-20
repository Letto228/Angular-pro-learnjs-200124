import { Component, ProviderToken, inject } from '@angular/core';

@Component({
  selector: 'app-undeclarated',
  templateUrl: './undeclarated.component.html',
  styleUrls: ['./undeclarated.component.css']
})
export class UndeclaratedComponent {
  readonly name = inject('name' as unknown as ProviderToken<string>, {optional: true})
}
