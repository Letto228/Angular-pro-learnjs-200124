import { AfterViewChecked, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'check-no-changes';
  counter = 0;

  // private readonly changeDetectorRef = inject(ChangeDetectorRef);

  ngAfterViewChecked(): void {
    // this.counter += 1;

    // setTimeout(() => {
    //   this.counter += 1;
    // });

    // this.changeDetectorRef.detectChanges();
    
    console.log('Increment', this.counter);
  }

  onLogTitle() {
    console.log(this.counter);
  }
}
