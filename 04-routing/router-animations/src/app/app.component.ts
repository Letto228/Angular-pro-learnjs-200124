import { Component, inject } from '@angular/core';
import { myAnimationFirst } from './animations/first';
import { ActivatedRoute, ChildrenOutletContexts } from '@angular/router';
import { myAnimationSecond } from './animations/last';
import { myAnimationLast } from './animations/second';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [myAnimationLast],
})
export class AppComponent {
  title = 'router-animations';

  readonly childrenOutletContexts = inject(ChildrenOutletContexts);

  getRouterOutletComponent(): ActivatedRoute['component'] | undefined {
    return this.childrenOutletContexts.getContext('primary')?.route?.component;
  }
}
