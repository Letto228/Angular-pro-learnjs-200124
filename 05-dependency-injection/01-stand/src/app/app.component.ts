import { Component, InjectionToken, Injector, inject } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'stand';

  constructor() {
    // const parentToken = new InjectionToken<{name: string}>('Is library token');
    // const token = new InjectionToken<string>('Is library token');

    // const libraryInjector = Injector.create({
    //   providers: [
    //     {
    //       provide: parentToken, // token
    //       useValue: {name: 'Egor'},
    //     },
    //   ],
    // });

    // const injector = Injector.create({
    //   parent: libraryInjector,
    //   providers: [
    //     {
    //       provide: token, // token
    //       useValue: 'Alex'
    //     }
    //   ],
    // });

    // console.log(injector.get(token), injector.get(parentToken));

    const token = new InjectionToken<string>('Is library token');
    // const token = new InjectionToken<string>('Is library token', {providedIn: 'root', factory: () => inject()});

    const injector = Injector.create({
      providers: [
        {
          provide: token, // token
          useValue: 'Alex'
        },
        // {
        //   provide: TestService,
        //   useClass: TestService,
        // }
        TestService,
        {
          provide: 'name',
          useExisting: TestService,
        },
        {
          provide: 'factory',
          useFactory: () => inject(TestService),
          // useFactory: () => new TestService(),
          // useFactory: () => 'Alex'
        },
      ],
    });

    console.log(injector.get(token), injector.get(TestService) === injector.get('name'));
  }
}
