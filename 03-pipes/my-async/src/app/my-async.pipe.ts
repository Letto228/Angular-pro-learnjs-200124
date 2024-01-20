import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Pipe({
  name: 'myAsync',
  pure: false,
})
export class MyAsyncPipe<T> implements PipeTransform, OnDestroy {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  private value: T | null = null;
  private subscription: Subscription | null = null;
  private currentStream$: Observable<T> | null = null;

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  transform(stream$: Observable<T>): T | null {
    if (stream$ !== this.currentStream$) {
      this.currentStream$ = stream$;

      this.subscription?.unsubscribe();
      this.subscription = null

      this.value = null;
    }

    if (!this.subscription) {
      this.subscription = stream$.subscribe(value => {
        this.value = value;
        this.changeDetectorRef.markForCheck();
      });
    }

    return this.value;
  }

}
