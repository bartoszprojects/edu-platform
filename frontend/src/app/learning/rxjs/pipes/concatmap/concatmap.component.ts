import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {concatMap, delay, from, fromEvent, interval, map, mergeMap, Observable, of, take, tap} from "rxjs";

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.sass']
})
export class ConcatmapComponent implements OnInit , AfterViewInit{
  @ViewChild('input1') input1!: ElementRef;

  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.basicsConcatMap0()
    this.rxjsConcatMapRealExample1()
  }

  basicsConcatMap0(): void {
    // concatMap:
    //   how it works: - use the concatMap when you want to have multi Streams in sequence. It means that when the
    //   first Stream is open but there are next ongoing Streams in the queue, they have to wait until the previous
    //   Stream is complete. Then the next Stream starts and when it ends, the next one starts in queque
    //   when to use:
    //      … use concatMap when you need to maintain the order of emissions and ensure that each inner observable is
    //      processed one after the other.
    //      real example: … consider an email sending application where users can queue multiple emails for delivery.
    //      Using concatMap ensures that each email is sent sequentially, maintaining the order in which they were
    //      queued. This is crucial for preserving the integrity of email conversations and ensuring that important
    //      messages are delivered first.
    //   when not to use:
    //      …avoid concatMap when parallel processing or concurrency is required, as it processes each inner observable
    //      sequentially, potentially leading to slower performance.Avoid concatMap when parallel processing or
    //      concurrency is required, as it processes each inner observable sequentially, potentially leading to slower
    //      performance.
    //      real example: … suppose you are building the online game when player can perform multi actions at the same
    //      time like moving the hero, cast the spell or attack the enemy. Using concatMap can lead to delays and bad
    //      user experience. The mergeMap would be great in this case because of async nature.
    //

    // basic example

    // .. we have two Streams: time Stream and keyup event Stream
    const intervalStream: Observable<number> = interval(300).pipe(take(10))

    const keyUpStream: Observable<string> = fromEvent<any>(this.input1.nativeElement, 'keyup')
      .pipe(map(event => event.target.value))
      .pipe(tap(() => console.log('----- Parent Observable triggered -----')))

    // .. we mix the Streams using concatMap. Every trigger of 'keyupStream' do something with the second
    // 'intervalStream' inner Observable. In this case it does 'concatMap'. It means that every trigger of the first
    // Observable (keyupStream) summon the next 'intervalStream', but summoned, have to wait until previous is done.
    // By this, there is a queue of incoming inner Observables that working in sequence.
    const finalObs = keyUpStream.pipe(
      concatMap((keyUpValue: string) =>
        intervalStream.pipe(
          map((intervalNumb: number) => ({keyUpValue, intervalNumb}))
        )
      )
    ).subscribe(({keyUpValue, intervalNumb}) => {
      console.log(keyUpValue, intervalNumb);
    });
  }

  rxjsConcatMapRealExample1() {
    const userIds = [1, 2, 3];

    from(userIds).pipe(
      concatMap(userId => fetchData(userId))
    ).subscribe(data => console.log(data));



    function fetchData(userId: number | string) {
      return of("data received: " + userId).pipe(delay((Math.floor(Math.random() * (1000 - 100 + 1)) + 100)))
    }

  }



}
