import { Component, ContentChildren, QueryList } from '@angular/core';
import { Animal } from '../animal';


@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
})
export class ZooComponent {

  @ContentChildren(Animal) animals: QueryList<Animal> | undefined;

  say() {
    this.animals?.forEach(animal => {
      animal.say()
    });
  }
}
