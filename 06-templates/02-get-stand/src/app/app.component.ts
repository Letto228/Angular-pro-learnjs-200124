import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CatComponent } from './animals/cat/cat.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contentchildren-by-service';

  // @ViewChild('cat')
  // private cat: CatComponent | undefined;
  // @ViewChild(CatComponent)
  // private cat: CatComponent | undefined;
  // @ViewChild(CatComponent, {read: ElementRef})
  // private catElementRef: ElementRef | undefined;
  // @ViewChild(CatComponent, {read: ElementRef, static: false})
  // private catElementRef: ElementRef | undefined;
  // @ViewChild(CatComponent, {read: ElementRef, static: true})
  // private catElementRef: ElementRef | undefined;
  @ViewChild('animal', {read: ElementRef, static: true})
  private catElementRef: ElementRef | undefined;

  @ViewChildren('animal', {read: ElementRef})
  private animalsElementRef: QueryList<ElementRef> | undefined;
}
