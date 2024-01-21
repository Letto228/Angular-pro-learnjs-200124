import { Component } from '@angular/core';
import { SwPush, SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, interval, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-worker';

  constructor(swUpdate: SwUpdate, swPush: SwPush) {
    Notification.requestPermission().then(permissionResult => {
      if (permissionResult === 'granted') {
        console.log('Can show notification');
      }
    })

    swPush.messages.subscribe(console.log);

    // interval(1000 * 60 * 2).subscribe(() => {
    //   swUpdate.checkForUpdate().then(console.log)
    // })

    swUpdate.versionUpdates
      .pipe(filter((event): event is VersionReadyEvent => event.type === 'VERSION_READY'))
      .subscribe((event) => {
        if (confirm('Есть новая версия приложения, загрузить?')) {
          document.location.reload();
        }
      })

    const serverPublicKey = '';

    swPush.requestSubscription({serverPublicKey}).then(pushSub => {
      
    })
  }
}


