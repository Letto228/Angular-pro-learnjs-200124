# NgIfTypeChecking

## Type guard для контекста шаблона

```ts
class StructureDirective {

  static ngTemplateContextGuard(
    _directive: StructureDirective,
    _context: unknown,
  ): _context is StructureDirectiveContext {
    return true;
  }

}
```

## Type guard для значений передаваемых в инпут структурной директивы и используемого в шаблоне структурной директивы

```ts
type InputValue = unknow;

class StructureDirective {
    @Input() inputProperty: InputValue | undefined;

    static ngTemplateGuard_inputProperty(
        _directive: MyNgIfDirective,
        _inputValue: InputValue | undefined,
    ): _inputValue is InputValue {
        return true;
    }

}
```
