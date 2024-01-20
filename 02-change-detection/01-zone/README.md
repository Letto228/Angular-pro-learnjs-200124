# Zone.js

Грубая эмуляция `Zone.js` на примере `setTimeout`:

```js
function patchSetTimeout() {
    const oldSetTimeout = setTimeout;

    setTimeout = (cb, timer) => {
        console.log('START');

        oldSetTimeout(() => {
            cb();
            console.log('FINISH!');
        }, timer)
    }
}

patchSetTimeout();
```

## NgZone

Подключение `Angular` зоны через `zone.js`:

> [!NOTE]
>
> - `name`: название зоны, полезно при отладке зон
>
> - `properties`: набор свойств, которые будут связаны с зоной
>
> - `onInvokeTask`: хук вызывающийся каждый раз, когда в зоне выполняется асинхронная задача (`setTimeout`, асинхронные обработчики и т.д.)
>
> - `onInvoke`: хук вызывающийся каждый раз, когда выполняется синхронная функция в зоне
>
> - `onHasTask`: хук вызывающийся при изменении статуса обработчика задачи в зоне
>
> - `onHandleError`: хук пердназначенный для перехвата и обработки ошибок, которые происходят в рамках зоны.

```ts
function forkInnerZoneWithAngularBehavior(zone) {
  const delayChangeDetectionForEventsDelegate = () => {
    delayChangeDetectionForEvents(zone);
  };
  zone._inner = zone._inner.fork({
    name: 'angular',
    properties: {
      'isAngularZone': true
    },
    onInvokeTask: (delegate, current, target, task, applyThis, applyArgs) => {
      if (shouldBeIgnoredByZone(applyArgs)) {
        return delegate.invokeTask(target, task, applyThis, applyArgs);
      }
      try {
        onEnter(zone);
        return delegate.invokeTask(target, task, applyThis, applyArgs);
      } finally {
        if (zone.shouldCoalesceEventChangeDetection && task.type === 'eventTask' || zone.shouldCoalesceRunChangeDetection) {
          delayChangeDetectionForEventsDelegate();
        }
        onLeave(zone);
      }
    },
    onInvoke: (delegate, current, target, callback, applyThis, applyArgs, source) => {
      try {
        onEnter(zone);
        return delegate.invoke(target, callback, applyThis, applyArgs, source);
      } finally {
        if (zone.shouldCoalesceRunChangeDetection) {
          delayChangeDetectionForEventsDelegate();
        }
        onLeave(zone);
      }
    },
    onHasTask: (delegate, current, target, hasTaskState) => {
      delegate.hasTask(target, hasTaskState);
      if (current === target) {
        // We are only interested in hasTask events which originate from our zone
        // (A child hasTask event is not interesting to us)
        if (hasTaskState.change == 'microTask') {
          zone._hasPendingMicrotasks = hasTaskState.microTask;
          updateMicroTaskStatus(zone);
          checkStable(zone);
        } else if (hasTaskState.change == 'macroTask') {
          zone.hasPendingMacrotasks = hasTaskState.macroTask;
        }
      }
    },
    onHandleError: (delegate, current, target, error) => {
      delegate.handleError(target, error);
      zone.runOutsideAngular(() => zone.onError.emit(error));
      return false;
    }
  });
}
```

Что происходит при запуске задачи:

1. Старт задачи в zone:

    ```ts
    function onEnter(zone) {
      zone._nesting++;
      if (zone.isStable) {
        zone.isStable = false;
        zone.onUnstable.emit(null);
      }
    }
    ```

2. Выполнение задачи в zone

3. Конец задачи в zone:

    ```ts
    function onLeave(zone) {
      zone._nesting--;
      checkStable(zone);
    }

    function checkStable(zone) {
      if (zone._nesting == 0 && !zone.hasPendingMicrotasks && !zone.isStable) {
        try {
          zone._nesting++;
          zone.onMicrotaskEmpty.emit(null);
        } finally {
          zone._nesting--;
          if (!zone.hasPendingMicrotasks) {
            try {
              zone.runOutsideAngular(() => zone.onStable.emit(null));
            } finally {
              zone.isStable = true;
            }
          }
        }
      }
    }
    ```

> [!NOTE]
>
> Вот где спрятан запуск CD!
>
> `zone.onMicrotaskEmpty.emit(null);`

Прослушивание `onMicrotaskEmpty` для запуска CD:

> [!NOTE]
>
> Нас интересует подписка на `onMicrotaskEmpty`

```ts
class NgZoneChangeDetectionScheduler {
    constructor() {
        this.zone = inject(NgZone);
        this.applicationRef = inject(ApplicationRef);
    }
    initialize() {
        if (this._onMicrotaskEmptySubscription) {
            return;
        }
        this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({
            next: () => {
                this.zone.run(() => {
                    this.applicationRef.tick();
                });
            }
        });
    }
    ngOnDestroy() {
        this._onMicrotaskEmptySubscription?.unsubscribe();
    }
}
```

Запуск CD для корневых компонентов приложения:

> [!NOTE]
>
> Нас интересует проход по корневым компонентам и запуск `detectChanges`
>
> ```ts
> for (let view of this._views) {
>   view.detectChanges();
> }
> ```

```ts
class ApplicationRef {
  tick() {
    (typeof ngDevMode === 'undefined' || ngDevMode) && this.warnIfDestroyed();
    if (this._runningTick) {
      throw new RuntimeError(101 /* RuntimeErrorCode.RECURSIVE_APPLICATION_REF_TICK */, ngDevMode && 'ApplicationRef.tick is called recursively');
    }
    try {
      this._runningTick = true;
      for (let view of this._views) {
        view.detectChanges();
      }
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        for (let view of this._views) {
          view.checkNoChanges();
        }
      }
    } catch (e) {
      // Attention: Don't rethrow as it could cancel subscriptions to Observables!
      this.internalErrorHandler(e);
    } finally {
      this._runningTick = false;
    }
  }
}
```

## NgZone API

1. `ngZone.runOutsideAngular` - для запуска cb вне Angular zone.
2. `ngZone.run` - для запуска cb в Angular zone

`bootstrapModule(AppModule, {ngZone: 'noop'})` - отключение зоны для всего приложения
