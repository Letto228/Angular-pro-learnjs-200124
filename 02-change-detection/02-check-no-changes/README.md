# CheckNoChanges

Запуск CD приложения происходит здесь:

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

За проверку изменений после запуска CD отвечает этот участок кода:

```ts
if (typeof ngDevMode === 'undefined' || ngDevMode) {
    for (let view of this._views) {
        view.checkNoChanges();
    }
}
```
