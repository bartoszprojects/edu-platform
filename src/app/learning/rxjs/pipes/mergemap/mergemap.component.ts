import {Component, OnInit} from '@angular/core';
import {
  concatMap, exhaustMap,
  from,
  fromEvent,
  interval,
  map,
  mergeMap,
  Observable,
  of,
  Subject,
  Subscription,
  switchMap,
  take,
  tap
} from "rxjs";

interface myInterface1 { [key: string]: number[] }

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.sass']
})
export class MergemapComponent implements OnInit {
  myFunc1 = () => {};
  index: number = 0;
  myObj1: myInterface1 = {};
  myStream1: Subscription | undefined
  constructor() {

  }

  ngOnInit() {
    this.rxjsMergeMapBasics0()

  }

  rxjsMergeMapBasics0(): void {
    // mergeMap
    // I am using mergeMap when I want to run the same stream multiple times at the same time

    // ------------------------------------------------------------

    const clickStream$ = fromEvent(document, 'click')
    const timeStream$ = interval(500).pipe(take(3))


    clickStream$
      // when clickStream is done (when I clicked) then it runs second inner timeStream
      //.. but when I click again during current timeStream session then it runs the same timeStream again
      .pipe(mergeMap((e) => timeStream$))
      // .subscribe((res) => console.log('rxjsMergeMapBasics0: ', res))

    // ------------------------------------------------------------

    const mySubj1: Subject<string> = new Subject()
    const myInterval1: Observable<number> = interval(200).pipe(take(15))

    this.myFunc1 = () => {
      this.index++
      let columnName = `Observable${this.index}`
      this.myObj1[columnName] = []
      return mySubj1.next(columnName)
    }

    this.myStream1 = mySubj1.pipe(exhaustMap(
      (e: string) => myInterval1,
      (valueFromSubject: string, valueFromInterval: number) =>
        ({ column: valueFromSubject, value: valueFromInterval })
    ))
    .subscribe((res): void => {
      this.myObj1[res.column].push(res.value)
      console.log('res: ', res)
      console.log('myObj1: ', this.myObj1)
    })
  }

  ngOnDestroy() {
    if (this.myStream1) this.myStream1.unsubscribe();
  }

}
