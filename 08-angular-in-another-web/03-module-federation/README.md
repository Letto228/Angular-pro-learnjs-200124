# 03ModuleFederation

share-lib: 1.0.0 / 1.0.1 / 1.1.0 / 2.0.0 / 2.0.1 / 2.1.0

- shell: ^1.0.0 / mf: ^1.0.1 / res: 1.1.0

- shell: ~1.0.0 / mf: 1.1.0 / res: 1.0.0

- share({share-lib: {singleton: true, requredVerstion: '>=1.1.0 <3.0.0'}})
