import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnDestroy {
  title = 'frontend';
  subscriptions: Array<Subscription> = [];

  // constructor(
  //   // importing the UserService class from user.service.ts
  //   private userService: UserService
  // ) {

  //   // FOR TESTING API ENDPOINT

  //   // push our new subscription to our array of subscriptions
  //   this.subscriptions.push(
  //     this.userService.test().subscribe({
  //       // we have two different callbacks depending on success or failure 
  //       next: (res) => { console.log(res) },
  //       error: (error) => { console.log(error) },
  //     })
  //   );

  // }

  ngOnDestroy(): void {
    // called whenever component will be garbage collected
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe(); // Close all memory leaks
    })
  }
}
