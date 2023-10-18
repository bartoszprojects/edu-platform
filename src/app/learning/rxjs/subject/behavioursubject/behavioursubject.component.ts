import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Component({
  selector: 'app-behavioursubject',
  templateUrl: './behavioursubject.component.html',
  styleUrls: ['./behavioursubject.component.sass']
})
export class BehavioursubjectComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

    this.basicsRxjsBehaviourSubject1()

  }
  basicsRxjsBehaviourSubject1(): void {
    // BEHAVIOUR SUBJECT (HOT & PUSH)

    // In contrast to rest of Subjects:
      // - it has initial value
      // - it always emit the latest value from Subject State to the new recipient

    // --------------------------------------------------

        const Sub1: BehaviorSubject<string> = new BehaviorSubject<string>('initial value')

        // => 'initial value' is going 'automatically' to Subscriber 1
        Sub1.subscribe((result) => console.log('Subscriber 1: ', result))

        Sub1.next('value 1') // => 'value1' is pushed 'manually' to Subscriber 1

        // => 'value 1' - the last state value - is going 'automatically' to Subscriber 2
        Sub1.subscribe((result) => console.log('Subscriber 2: ', result))

        Sub1.next('value 2') // => 'value2' is pushed 'manually' to Subscriber 1 & Subscriber 2

        // Subscriber 1: 'initial value' => automatically

        // Subscriber 1: 'value 1' => manually

        // Subscriber 2: 'value 1' => automatically

        // Subscriber 1: 'value 2' => manually
        // Subscriber 2: 'value 2' => manually

  }

}
