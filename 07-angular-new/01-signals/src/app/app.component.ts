import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { easyEffect, easySignal } from './easy-signals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'signals';

  readonly count = signal(0);
  readonly doubleSignal = computed(() => this.count() * 2);

  get name(): string {
    console.log('Getter run');
    
    return 'Egor';
  }

  constructor() {
    // setTimeout(() => {
    //   this.count.set(1);
    // }, 2000)

    setInterval(() => {
      this.count.update(counter => counter + 1);
      // this.count();
    }, 1000)

    // count.set(1);
    // count.update(counter => counter + 1);
    // count.mutate(() => {

    // });

    // ------------------------------------

    // const showCount = signal(false);
    // const testCount = signal(0);
    // const conditionalCount = computed(() => {
    //   if (showCount()) {
    //     return `the count is ${testCount()}`
    //   }

    //   return 'Nothing';
    // });

    // console.log(conditionalCount()); // dependent: showCount

    // showCount.set(true);

    // console.log(conditionalCount()); // dependent: showCount, testCount

    // ------------------------------------

    // const ref = effect(onCleanup => {
    //   console.log(`The current count is: ${this.count()}`);

    //   const id = setTimeout(() => {});

    //   onCleanup(() => {
    //     clearTimeout(id);
    //     console.log('Deleted');
    //   });
    // });

    // setTimeout(() => {
    //   ref.destroy();
    // }, 5000)

    const count = easySignal(0);

    const ref = easyEffect(() => {
      console.log(`The current count is: ${count()}`);
    });

    let time = 0;

    setInterval(() => {
      count.set(time++)
    }, 100)
  }
}
