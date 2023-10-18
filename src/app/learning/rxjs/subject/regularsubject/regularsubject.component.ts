import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";

@Component({
  selector: 'app-regularsubject',
  templateUrl: './regularsubject.component.html',
  styleUrls: ['./regularsubject.component.sass']
})
export class RegularsubjectComponent implements OnInit {
  myArray1: any[] = ["item1"]
  myFunc1 = ()=> {};

  constructor() {

  }

  ngOnInit() {
    this.basicsRxjsRegularSubject1();
    this.basicsRxjsRegularSubject2();
  }

  basicsRxjsRegularSubject1(): void {

    // SUBJECT (HOT & PUSH)
      // You can use Subject to set the Stream that wait for values and set the recipients. Stream and recipients
      // are waiting until you pass the value using .next(value). Then one shared value in single emission will go to
      // all recipients

    // In contrast to Regular Observable, Subject is:
      // - HOT => it shares the same value to multi recipients
      // - PUSH => it emits value before someone subscribe to it

    // In contrast to rest of Subjects:
      // - it has no initial value
      // - it emits only values that are pushed to it

      // ------------------------------------------------------------

          const Sub1: Subject<string> = new Subject();

          Sub1.subscribe() // => 'value 1'
          Sub1.subscribe() // => 'value 1'
          Sub1.subscribe() // => 'value 1'

          // above are the recipients who are patiently waiting for any value. Below, we push value into the Stream
          Sub1.next('value 1')

      // ------------------------------------------------------------

          const Sub2: Subject<string> = new Subject();

          Sub2.subscribe((result) => console.log('Subscriber 1: ', result)) // Subscriber 1
          Sub2.subscribe((result) => console.log('Subscriber 2: ', result)) // Subscriber 2

          Sub2.next('value 1') // => to Subscriber 1, to Subscriber 2
          Sub2.next('value 2') // => to Subscriber 1, to Subscriber 2

          Sub2.subscribe((result) => console.log('Subscriber 3: ', result)) // Subscriber 3

          Sub2.next('value 3') // => to Subscriber 1, to Subscriber 2, to Subscriber 3
          // Subscriber 1:  value 1
          // Subscriber 2:  value 1

          // Subscriber 1:  value 2
          // Subscriber 2:  value 2

          // Subscriber 1:  value 3
          // Subscriber 2:  value 3
          // Subscriber 3:  value 3 // regular Subject does not keep previous values on the state

  }

  basicsRxjsRegularSubject2(): void {
    this.myFunc1 = () => this.myArray1.push('item')
  }

}
