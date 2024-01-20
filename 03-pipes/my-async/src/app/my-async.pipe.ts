import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'myAsync',
  pure: false,
})
export class MyAsyncPipe<T> implements PipeTransform {

  transform(stream$: Observable<T>): T | null {
    return null;
  }

}
