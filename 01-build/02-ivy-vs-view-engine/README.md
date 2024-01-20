# View Engine VS IVY

Исходный код:

TS: 

```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ivy';
  textContent = 'text content';
  divClasses = 'line';

  check() {
    console.log('checked');
  }
}
```

HTML:

```html
<app-header
    [title]="title"
></app-header>
<div
    [style.width.px]="100"
    [style.height.px]="5"
    class="{{divClasses}}"
></div>
<h2>Hi</h2>
<h3
    class="shadow"
    (click)="check()"
>
    It's my content
    {{textContent}}
</h3>
```

## Работа View Engine

1. `Template HTML` (компиляция)
2. `Описание шаблона` (рантайм)
3. `Интерпритатор Angular` (рантайм)
4. `DOM`

Скомпилированный `AppComponent`:

```ts
function View_AppComponent_0(_l) {
  return _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵvid'](
    0,
    [
      (_l()(),
      _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵeld'](
        0,
        0,
        null,
        null,
        1,
        'app-header',
        [],
        null,
        null,
        null,
        _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__[
          'View_HeaderComponent_0'
        ],
        _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__[
          'RenderType_HeaderComponent'
        ]
      )),
      _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵdid'](
        1,
        49152,
        null,
        0,
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__[
          'HeaderComponent'
        ],
        [],
        { title: [0, 'title'] },
        null
      ),
      (_l()(),
      _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵeld'](
        2,
        0,
        null,
        null,
        0,
        'div',
        [],
        [
          [4, 'width', 'px'],
          [4, 'height', 'px'],
          [8, 'className', 0],
        ],
        null,
        null,
        null,
        null
      )),
      (_l()(),
      _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵeld'](
        3,
        0,
        null,
        null,
        1,
        'h2',
        [['class', 'shadow']],
        null,
        [[null, 'click']],
        function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;
          if ('click' === en) {
            var pd_0 = _co.check() !== false;
            ad = pd_0 && ad;
          }
          return ad;
        },
        null,
        null
      )),
      (_l()(),
      _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵted'](4, null, [
        " It's my content ",
        '\n',
      ])),
    ],
    function (_ck, _v) {
      var _co = _v.component;
      var currVal_0 = _co.title;
      _ck(_v, 1, 0, currVal_0);
    },
    function (_ck, _v) {
      var _co = _v.component;
      var currVal_1 = 100;
      var currVal_2 = 5;
      var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
        'ɵinlineInterpolate'
      ](1, '', _co.divClasses, '');
      _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3);
      var currVal_4 = _co.textContent;
      _ck(_v, 4, 0, currVal_4);
    }
  );
}
function View_AppComponent_Host_0(_l) {
  return _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵvid'](
    0,
    [
      (_l()(),
      _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵeld'](
        0,
        0,
        null,
        null,
        1,
        'app-root',
        [],
        null,
        null,
        null,
        View_AppComponent_0,
        RenderType_AppComponent
      )),
      _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵdid'](
        1,
        49152,
        null,
        0,
        _app_component__WEBPACK_IMPORTED_MODULE_4__['AppComponent'],
        [],
        null,
        null
      ),
    ],
    null,
    null
  );
}
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵccf'](
  'app-root',
  _app_component__WEBPACK_IMPORTED_MODULE_4__['AppComponent'],
  View_AppComponent_Host_0,
  {},
  {},
  []
);
```

## Работа IVY

Цель: сделать быстрее, меньше, проще.

1. `Template HTML` (компиляция)
2. `Инструкции шаблона` (рантайм)
3. `DOM`

Скомпилированный `AppComponent`:

> [!NOTE]
>
> `rf` (render flag) - на какой стадии рендера запускается функция шаблона.
>
> `ctx` (context) - контекст шаблона.

```ts
class AppComponent {
  constructor() {
    this.title = 'ivy';
    this.textContent = 'text content';
    this.divClasses = 'line';
  }
  check() {
    console.log('checked');
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 6,
    vars: 9,
    consts: [[3, "title"], [1, "shadow", 3, "click"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header", 0)(1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Hi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_h3_click_4_listener() {
          return ctx.check();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.divClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 100, "px")("height", 5, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" It's my content ", ctx.textContent, "\n");
      }
    },
    dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
    styles: [".line[_ngcontent-%COMP%] {\n    background-color: black;\n}\n\n.shadow[_ngcontent-%COMP%] {\n    text-shadow: 6px 6px 3px #000;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyIubGluZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5zaGFkb3cge1xuICAgIHRleHQtc2hhZG93OiA2cHggNnB4IDNweCAjMDAwO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
```

Функция рендера шаблона:

> [!NOTE]
>
> В блоке кода ниже `core` === `_angular_core__WEBPACK_IMPORTED_MODULE_1__`

```ts
if (rf & 1) {
  core["ɵɵelement"](0, "app-header", 0)(1, "div");
  core["ɵɵelementStart"](2, "h2"); 
  core["ɵɵtext"](3, "Hi");
  core["ɵɵelementEnd"]();
  core["ɵɵelementStart"](4, "h3", 1);
  core["ɵɵlistener"](
    "click",
    function AppComponent_Template_h3_click_4_listener() {
      return ctx.check();
    }
  );
  core["ɵɵtext"](5);
  core["ɵɵelementEnd"]();
}
if (rf & 2) {
  core["ɵɵproperty"]("title", ctx.title);
  core["ɵɵadvance"](1);
  core["ɵɵclassMap"](ctx.divClasses);
  core["ɵɵstyleProp"]("width", 100, "px")("height", 5, "px");
  core["ɵɵadvance"](4);
  core["ɵɵtextInterpolate1"](
    " It's my content ",
    ctx.textContent,
    "\n"
  );
}
```

А теперь расбросам ее по шаблону:

> [!NOTE]
>
> Записи по типу:
> 
> ```ts
>   core["ɵɵelement"](0, "app-header", 0)(1, "div");
> ```
>
> Равноцены записям
>
> ```ts
>   core["ɵɵelement"](0, "app-header", 0);
>   core["ɵɵelement"](1, "div");
> ```
>
> В общем, применяется чейнинг)

<table>

<tr>
<td> </td> <td> Шаблон </td> <td> Статичная часть шаблона (rf === 1) </td>
</tr>
<tr>
<td>

```ts
0
1
2
3

4








5
-
```

</td>
<td>

```html
<app-header></app-header>
<div></div>
<h2>
  Hi
</h2>
<h3
    class="shadow"
    (click)="check()"





>
  ''
</h3>
```

</td>
<td>

```ts
core["ɵɵelement"](0, "app-header", 0)
                 (1, "div");
core["ɵɵelementStart"](2, "h2");
  core["ɵɵtext"](3, "Hi");
core["ɵɵelementEnd"]();
core["ɵɵelementStart"](4, "h3", 1);

  core["ɵɵlistener"](
    "click",
    function AppComponent_Template_h3_click_4_listener() {
      return ctx.check();
    }
  );

  core["ɵɵtext"](5);
core["ɵɵelementEnd"]();
```

</td>
</tr>

<tr>
<td> </td> <td> Шаблон </td> <td> Динамическая часть шаблона (rf === 2) </td>
</tr>
<tr>
<td>

```ts
0


1




2
3

4



5

-
```

</td>
<td>

```html
<app-header
    [title]="title"
></app-header>
<div
    class="{{divClasses}}"
    [style.width.px]="100"
    [style.height.px]="5"
></div>
<h2>
  Hi
</h2>
<h3
    class="shadow"
    (click)="check()"
>
  It's my content {{textContent}}\n

</h3>
```

</td>
<td>

```ts

core["ɵɵproperty"]("title", ctx.title);

core["ɵɵadvance"](1);
core["ɵɵclassMap"](ctx.divClasses);
core["ɵɵstyleProp"]("width", 100, "px")
                   ("height", 5, "px");








core["ɵɵadvance"](4);
core["ɵɵtextInterpolate1"](" It's my content ", ctx.textContent, "\n");

```

</td>
</tr>

<tr>
<td></td> <td> Исходный шаблон </td> <td></td>
</tr>
<tr>
<td></td>
<td>

```html
<app-header
    [title]="title"
></app-header>
<div
    [style.width.px]="100"
    [style.height.px]="5"
    class="{{divClasses}}"
></div>
<h2>Hi</h2>
<h3
    class="shadow"
    (click)="check()"
>
    It's my content
    {{textContent}}
</h3>
```

</td>
<td></td>
</tr>

</table>

> [!NOTE]
>
> Разработчики `Angular` гарантируют однозначный и прозрачный порядок создания элементов из шаблона, но никак не гарантируют порядок инициализации привязок, они оставляют возможность изменения порядка за собой для оптимизаций и чейнинга.
