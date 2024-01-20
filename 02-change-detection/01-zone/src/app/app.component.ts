import { ApplicationRef, Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'zone';
  counter = 0;

  constructor(ngZone: NgZone, private readonly applicationRef: ApplicationRef) {
    // ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.counter += 1;
        // applicationRef.tick();

        console.log('Increment, ', this.counter);
      })
    // });
  }

  onClick() {
    this.counter += 1;

    this.applicationRef.tick();

    console.log('Increment');
  }
}
