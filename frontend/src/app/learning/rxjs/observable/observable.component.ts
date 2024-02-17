import {Component, OnInit} from '@angular/core';
import {fromEvent, map, Observable, of, share, shareReplay, Subject, tap} from "rxjs";
import {CommonService} from "../../common-helpers/services/common.service";
import {commonInterface1} from "../../common-helpers/interfaces/common-interfaces";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.sass']
})
export class ObservableComponent implements OnInit {

  func1 = () => {};
  dollarVar1$!: Observable<commonInterface1[]>

  constructor(private commonService: CommonService) {
    this.dollarVar1$ = this.commonService.getData()

  }

  ngOnInit() {
    // this.rxjsObservable0()
    // this.rxjsObservable1();
    // this.rxjsHotColdObservables();
  }

  rxjsObservable0(): void {

    // OBSERVABLE IN GENERAL

        // Observable is the 'Stream' that you can connect to it and listen / watch for values that going
        // through this 'Stream' and disconnect from it in any time

    // OBSERVABLE VS PROMISE

        // Observable may return a single value or return multiple values during a period of time
        // Promise can return only one value once

        // Observable is initialized only when the subscription is used
        // Promise is initialized when the code is invoked

        // Observable handles multi pipe operators like map, mergeMap, debounceTime
        // Promise has no operators

        // Observable may be HOT or COLD
        // Promise is always HOT

    // OBSERVABLE & OBSERVER & SUBSCRIPTION

        // OBSERVABLE => Observable is the Stream of data. You can put many types of data to flow through the Stream

        // OBSERVER => Observer track the data that flows through the Stream. Then it helps you how to react to the data or events.

        // SUBSCRIPTION => Subscription represents the execution of an Observable and allows you to manage the subscription's lifecycle

        // ------------------------------------------------------------------
        const bart: Observable<Event> = fromEvent(document, 'click')

        const myObserver = {
          result: (result: any) => console.log('result from next(): ', result),
          error: (error: any) => console.log('result from error(): ', error),
          complete: () => console.log('result from complete()')
        }

        const mySubsc1 = bart.subscribe(myObserver)

        this.func1 = () => mySubsc1.unsubscribe()

  }

  rxjsHotColdObservables() {
    // HOT & COLD Observable

      // COLD Observable (UNICAST & PULL)

        // This is like private lesson with teacher and single student. Different students learn the same subject but
        // in a various time.
        // This is an UNICAST (throw data for only one recipient at the time)

          // - It emits data only when user subscribe to it
          // - For the new subscriber, it produces the same values again
          // - example: http.get

      // HOT Observable (MULTICAST & PUSH | PULL)

        // This is like lesson for students in a large auditorium. All students listen the same lecture in the same time
        // This is MULTICAST (throw data for multi recipients at the same time)

          // - It emits data even if user don't subscribe to it
          // - It shares the same value for multi subscribers
          // - example: Subject


      // Examples of COLD OBSERVABLES

      // --------------------------------------------------


          const myObs1 = of([1,2,3,4,5])

          // this is COLD observable because three subscribers means three independent streams
          myObs1.subscribe() // independent stream with [1,2,3,4,5] value
          myObs1.subscribe() // independent stream with [1,2,3,4,5] value
          myObs1.subscribe() // independent stream with [1,2,3,4,5] value


      // --------------------------------------------------

          const outerMathRandom = Math.random()

          const myObs3 = of(10).pipe(map((numb: number) => numb * outerMathRandom))

          // If we use Math.random() inside the stream then every recipient receives different value
          // But it is still COLD because it emits values independently for each subscriber
          myObs3.subscribe() // => 0.098851109
          myObs3.subscribe() // => 0.065415415

          // If we use Math.random() outside the stream then every recipient receives the same value
          // But it is still COLD because it emits values independently for each subscriber
          myObs3.subscribe() // => 0.115550600
          myObs3.subscribe() // => 0.115550600

    // Examples of HOT OBSERVABLES

        const mySub1 = new Subject()

        // it is HOT because subscribers get the same value AND there is only one common emit to all recipients
        mySub1.subscribe() // => 0.115550600
        mySub1.subscribe() // => 0.115550600
        mySub1.subscribe() // => 0.115550600

        mySub1.next(Math.random())



    // Difference between HOT and COLD Observable

       // --------------------------------------------------

          // if we use $ observable and subscribe to it in multi places inside html template then there is
          // multi requests to the backend
          this.dollarVar1$ = this.commonService.getData()
          // .. so we should convert COLD observable (unicast) to HOT using share() operator.
          // Behind the scenes this is just hidden Subject that share one value to multi recipients
            .pipe(share())

  }

  rxjsHigherOrderObservables() {

  }


}
