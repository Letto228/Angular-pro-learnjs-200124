import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-if-type-checking';
  data: {name: string; working: boolean} | null = null;

  onLoadData() {
    this.data = {
      name: 'Egor',
      working: true,
    }
  }
}
