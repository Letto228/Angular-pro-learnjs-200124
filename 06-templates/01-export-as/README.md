# Шаблонные переменные

Синтаксис шаблонной переменной: атрибут `#` + `templateVariableName` (`<element #templateVariableName>`)

Что лежит в шаблонной переменной по дефолту:

1. Если применили к host element компонента - инстанс класса компонента

2. Если применили к DOMElement - DOMElement

> [!NOTE]
>
> Чтобы получить в шаблонной переменной инстанс директивы - нужно передать в шаблонную переменную строку по которой директива экспортируется. Данная строка фиксируется в `@Directive` под свойством `exportAs`
