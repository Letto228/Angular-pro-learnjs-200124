import { Component, Injector, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DeclaratedComponent } from './declarated/declarated.component';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'insert-stand';

  @ViewChild('viewContainer', {static: true, read: ViewContainerRef})
  private container: ViewContainerRef | undefined;

  readonly component$ = from(import('./undeclarated/undeclarated.component')).pipe(
    map(m => m.UndeclaratedComponent),
  )

  readonly injector = Injector.create({providers: [
    {
      provide: 'name',
      useValue: 'Egor',
    }
  ]})

  onClickComponent() {
    // this.container?.createComponent(DeclaratedComponent);

    const injector = Injector.create({providers: [
      {
        provide: 'name',
        useValue: 'Egor',
      }
    ]})

    import('./undeclarated/undeclarated.component').then(m => {
      this.container?.createComponent(m.UndeclaratedComponent, {injector});
    })
  }

  onClickTemplate(template: TemplateRef<unknown>) {
    this.container?.createEmbeddedView(template, {$implicit: 'Egor', surname: 'Sidorov'});
  }

  onClickClear() {
    this.container?.clear();
  }

}
