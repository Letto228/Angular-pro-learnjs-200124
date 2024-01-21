import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { CatComponent } from '../animals/cat/cat.component';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
})
export class ZooComponent {
  // @ContentChild('cat')
  // private cat: CatComponent | undefined;
  // @ContentChild(CatComponent)
  // private cat: CatComponent | undefined;
  // @ContentChild(CatComponent, {read: ElementRef})
  // private catElementRef: ElementRef | undefined;
  // @ContentChild(CatComponent, {read: ElementRef, static: false})
  // private catElementRef: ElementRef | undefined;
  // @ContentChild(CatComponent, {read: ElementRef, static: true})
  // private catElementRef: ElementRef | undefined;
  // @ContentChild('animal', {read: ElementRef, static: true, descendants: true})
  // private catElementRef: ElementRef | undefined;
  // @ContentChild('animal', {read: ElementRef, static: true, descendants: false})
  // private catElementRef: ElementRef | undefined;

  // @ContentChildren('animal', {read: ElementRef})
  // private animalsElementRef: QueryList<ElementRef> | undefined;
}
