Исходный код

TS:

```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
```

HTML:

```html
Hello word
```

- `JIT`-компиляция (Just-in-TIme);

    > [!TIP]
    >
    > ```bash
    > npm run start:jit
    > ```

    Компиляция состоит из 3 этапов:

    1. **Program creation**

        Сборка и обнаружение всех используемых файлов

    2. **Type checking**

        Проверка в типизации

    3. **Emit**

        Компиляция TS кода в JS

    После сборки приложения:

    ```js
    let AppComponent = class AppComponent {};
    AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
      selector: 'app-root',
      template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
      styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
    })], AppComponent);
    ```

    После компиляции в браузере:

    ```js
    (function anonymous(jit___defineComponent_0, jit_AppComponent_1, jit___text_2) {
        "use strict";
        'use strict';
        var $def = jit___defineComponent_0({
            type: jit_AppComponent_1,
            selectors: [['app-root']],
            decls: 1,
            vars: 0,
            template: function AppComponent_Template(rf, ctx) {
                if (rf & 1) {
                    jit___text_2(0, 'Hello word');
                }
            },
            styles: ['/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */']
        });
        return {
            $def: $def
        };
        //# sourceURL=ng:///AppComponent.js
        //# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoibmc6Ly8vQXBwQ29tcG9uZW50LmpzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQXBwQ29tcG9uZW50LmpzIiwibmc6Ly8vQXBwQ29tcG9uZW50L3RlbXBsYXRlLmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIkhlbGxvIHdvcmQiXSwibWFwcGluZ3MiOiJBQUFBOzs7b0JDQUE7OyJ9
    }
    )
    ```

- `AOT`-компиляция (Ahead-of-Time).

    > [!TIP]
    >
    > ```bash
    > npm run start:aot
    > ```

    Компиляция состоит из 5 этапов:

    1. (TS) **Program creation**

        Сборка и обнаружение всех используемых файлов.

    2. (Angular) **Analysis**

        Обнаруживаются классы при помощи декораторов Angular и компилируются. Все классы рассматриваются по отдельности

    3. (Angular) **Resolve**

        Все фалы рассматриваются еще раз, но уже в совокупности: проверяются зависимости, модули и т.д.

    4. (TS) **Type checking**

        Проверка в типизации.

        *В том числе проверяются типы и в шаблонах*

    5. (TS) **Emit**

        Сама компиляция TS кода в JS.

        *На данном этапе так же происходит установка шаблонных функций в компонент и т.д.*

    После сборки приложения:

    ```js
    class AppComponent {
      static #_ = this.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };
      static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Hello word");
          }
        },
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
    ```

## Преимущество `AOT` перед `JIT`

1. Быстрее
2. Меньше
3. Проверка типизации шаблонов.
4. Безопаснее
5. Tree Shaking

Недостатки AOT:

1. Требуется больше времени на сборку приложения.

    P.S. Не актуально для приложений с `IVY`
