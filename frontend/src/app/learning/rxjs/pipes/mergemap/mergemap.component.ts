import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {
  concat,
  concatMap, delay, exhaustMap,
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
  tap, zip
} from "rxjs";

interface myInterface1 {
  [key: string]: number[]
}

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.sass']
})
export class MergemapComponent implements OnInit, AfterViewInit {
  basketSubject$: Subject<any> = new Subject<any>()
  basketList: Array<string> = []

  @ViewChild('input1') input1!: ElementRef;
  @ViewChild('loadDataButton') loadDataButton!: ElementRef;
  @ViewChild('getDataButton') getDataButton!: ElementRef;
  @ViewChild('exportDataButton') exportDataButton!: ElementRef;
  @ViewChild('getAllDataButton') getAllDataButton!: ElementRef;

  addToBasket = () => {}
  click1 = () => {}
  click2 = () => {}

  constructor() {

  }

  ngAfterViewInit() {
    this.rxjsMergeMapBasics0()
    this.rxjsMergeMapRealExample1()
    this.rxjsMergeMixedOperators1()

  }

  ngOnInit() {
  }

  rxjsMergeMapBasics0(): void {
    //   mergeMap:
    //      how it works: - use the mergeMap when you want to have multi Streams at the same time. The streams do not
    //      wait for each other but operate independently. This works similarly to async queries in Event Loop
    //   when to use:
    //      … when you need to handle multiple asynchronous tasks simultaneously, such as making multiple API requests
    //      or processing multiple events concurrently.
    //      real example: … suppose you have a dashboard application that handles multi real-time updates from multi
    //      sources like task-list, task count, user count, stock prices, weather updates. MergeMap operator allows
    //      to handle it in concurrently way, like an Event Loop where the first asynchronous action does not block
    //      the next incoming one.
    //   when not to use:
    //      … avoid using mergeMap when the order of emissions matters, as it does not guarantee the order of
    //      merged emissions.
    //      real example: … imagine that the User wants to update his profile picture or another personal data like
    //      name or email. Using mergeMap may lead to unexpected behaviour.It does not guarantee the order of updating
    //      the data. The first update can cover the second emission and then User gets the unexpected data.


    // basic example

    // .. we have two Streams: time Stream and keyup event Stream
    const intervalStream: Observable<number> = interval(300).pipe(take(10))

    const keyUpStream: Observable<string> = fromEvent<any>(this.input1.nativeElement, 'keyup')
      .pipe(map(event => event.target.value))
      .pipe(tap(() => console.log('----- Parent Observable triggered -----')))

    // .. we mix the Streams using mergeMap. Every trigger of 'keyupStream' do something with the second
    // 'intervalStream' inner Observable. In this case it does 'mergeMap'. It means that every trigger of the first
    // Observable (keyupStream) summon the next 'intervalStream' and they are working concurrently
    const finalObs = keyUpStream.pipe(
      mergeMap((keyUpValue: string) =>
        intervalStream.pipe(
          map((intervalNumb: number) => ({keyUpValue, intervalNumb}))
        )
      )
    ).subscribe(({keyUpValue, intervalNumb}) => {
      console.log(keyUpValue, intervalNumb);
    });

  }


  rxjsMergeMapRealExample1() {
    let random: number;
    let item: number = 0

    this.addToBasket = () => {
      item++
      random = (Math.floor(Math.random() * (5000 - 100 + 1)) + 100);
      this.basketSubject$.next(`item - ${item} --- ${random}`);
    }

    // This is an example when we should to use mergeMap instead of e.g. switchMap.
    // .. when User is adding something to the shopping Cart then it should work in the concurrently way - asynchronous.
    // .. in this case we don't care about the order of the requests. If we use switchMap instead then the previous
    // sending the item to the Cart would be canceled and user that rapidly clicking the button would not have all
    // the added items.

    const final = this.basketSubject$.pipe(
      mergeMap((resultFromSubject) => {
        const sendItemToBackend: Observable<string> = of("item added").pipe(delay(random));
        return sendItemToBackend
          .pipe(map((resultFromThePseudoHTTPPut: string):
          { resultFromThePseudoHTTPPut: string, resultFromSubject: string} =>
            ({ resultFromThePseudoHTTPPut, resultFromSubject })))
          .pipe(tap((mixedResult) =>
            this.basketList.push(mixedResult.resultFromSubject)))
      })
    );

    final.subscribe((finalResult) => console.log());
  }


  rxjsMergeMixedOperators1() {
    // switchMap real example
    //
    const loadDataButtonStream$ = fromEvent(this.loadDataButton.nativeElement, 'click');
    const getDataButtonStream$ = fromEvent(this.getDataButton.nativeElement, 'click');

// Simulate asynchronous operations
    const loadDataStream$ = of('Data Loaded').pipe(delay(100));
    const getDataStream$ = of('Data Received').pipe(delay(5000));

    const multiMergeMaps$ = loadDataButtonStream$.pipe(
      mergeMap(
        () => loadDataStream$.pipe(tap((res) => console.log('res from loadDataStream$: ', res))),
        (clickValue, dataValue) => ({ clickValue, dataValue })
      ),
      concatMap(
        data => getDataStream$.pipe(tap((res) => console.log('res from getDataStream$: ', res))),
        (mergedData, dataValue) => ({ ...mergedData, dataValue })
      ),

    );

    // Subscribe to the merged observable
    multiMergeMaps$.subscribe(({ clickValue, dataValue }) => {
      // console.log('Click Value:', clickValue);
      // console.log('Data Value:', dataValue);
    });


  }
}
