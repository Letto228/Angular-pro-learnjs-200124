import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { DumbNgIfContext } from "./dumb-ng-if-context.interface";

@Directive({
  selector: '[appDumbNgIf]'
})
export class DumbNgIfDirective<T> {
  @Input() set appDumbNgIf(data: T | null | undefined) {
    const isContainerHasView = this.viewContainerRef.length;
    const needClear = !data && isContainerHasView;

    if (needClear) {
      this.viewContainerRef.clear();

      return;
    }

    const needCreateView = data && !isContainerHasView;

    if (needCreateView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: data,
        appDumpNgIf: data,
      });
    }
  }

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<DumbNgIfContext<T>>
  ) {}
}
