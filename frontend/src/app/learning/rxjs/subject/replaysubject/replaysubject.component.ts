import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, ReplaySubject} from "rxjs";

@Component({
  selector: 'app-replaysubject',
  templateUrl: './replaysubject.component.html',
  styleUrls: ['./replaysubject.component.sass']
})
export class ReplaysubjectComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    this.basicsRxjsReplaySubject1()

  }

  basicsRxjsReplaySubject1(): void {
    // REPLAY SUBJECT (HOT & PUSH)

    // In contrast to rest of Subjects:
    // - it has no initial value
    // - it always emit the given number of latest values from Subject State to the new recipient

    // --------------------------------------------------

    const Sub1: ReplaySubject<string> = new ReplaySubject<string>(2) // bufferSize => last 2 recent values

    Sub1.subscribe((result) => console.log('Subscriber 1: ', result))

    Sub1.next('value 1') // => it is going to Subscriber 1
    Sub1.next('value 2') // => it is going to Subscriber 1
    Sub1.next('value 3') // => it is going to Subscriber 1
    Sub1.next('value 4') // => it is going to Subscriber 1

    // => 'value 3', 'value 4' - the 2 latest values of Subject State are going 'automatically' to the Subscriber 2
    Sub1.subscribe((result) => console.log('Subscriber 2: ', result))

    // Subscriber 1: 'value 1' => manually pushed
    // Subscriber 1: 'value 2' => manually pushed
    // Subscriber 1: 'value 3' => manually pushed
    // Subscriber 1: 'value 4' => manually pushed

    // Subscriber 2: 'value 4' => automatically pushed (last 2 values)
    // Subscriber 2: 'value 5' => automatically pushed (last 2 values)

  }

}
