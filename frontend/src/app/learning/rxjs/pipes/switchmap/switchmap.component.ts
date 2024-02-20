import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {
  BehaviorSubject,
  concatMap, delay,
  exhaust,
  exhaustMap, filter,
  fromEvent,
  interval,
  mergeMap,
  Observable, of, pipe,
  Subject, Subscription,
  switchMap,
  take, tap,
  timer
} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, startWith} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.sass']
})
export class SwitchmapComponent implements OnInit, AfterViewInit {
  @ViewChild('input1') input1!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.rxjswitchMapBasics0()
    this.rxjswitchMapRealExample1()
  }

  rxjswitchMapBasics0() {
    // switchMap
    // how it works: how it works: - use the switchMap when you want to have only one current Stream at the time.
    // When the one Stream is open but the second Stream suddenly appears then it stops the Current Stream.

    // when to use:
    // desc: ... when you want to manage two streams and ensure only one is active at a time, useful for scenarios like
    // autocomplete or typeahead search.

    // real example: ... scenario whe the user is typing a value in a query input. When he stops typing then after 400ms
    // (debounceTime) the http request is sent to the backend. Using mixed two Streams (typing and backend request) &
    // switchMap we prevent the backend to get the data too fast if the first request is live but the User
    // typed another query at the time.

    // when not to use:
    // desc: ... you probably want to avoid switchMap in scenarios where every request needs to complete, think writes to a
    // database. switchMap could cancel a request if the source emits quickly enough

    // real example: ... imagine that there is a CHAT between two users. You manage two streams at the same time:
    // outgoing messages and incoming messages. If you use switchMap(income, outcome) then sometimes the switchMap
    // operator can cancel incoming or outgoing message Stream and the Chat would be not updated with the all messages


    // basic example

    // .. we have two Streams: time Stream and keyup event Stream
    const intervalStream: Observable<number> = interval(300).pipe(take(10))

    const keyUpStream: Observable<string> = fromEvent<any>(this.input1.nativeElement, 'keyup')
      .pipe(map(event => event.target.value))
      .pipe(tap(() => console.log('----- Parent Observable triggered -----')))

    // .. we mix the Streams using switchMap. Every trigger of 'keyupStream' do something with the second
    // 'intervalStream' inner Observable. In this case it does 'switchMap'. It means that every trigger of the first
    // Observable (keyupStream) cancels the current 'intervalStream' and run the second one
    const finalObs = keyUpStream.pipe(
      switchMap((keyUpValue: string) =>
        intervalStream.pipe(
          map((intervalNumb: number) => ({keyUpValue, intervalNumb}))
        )
      )
    ).subscribe(({keyUpValue, intervalNumb}) => {
      console.log(keyUpValue, intervalNumb);
    });
  }

  rxjswitchMapRealExample1() {
    // switchMap real example
    //

    interface Book {
      bookName: string;
    }

    const books: Book[] = [
      {bookName: "redBook1"},
      {bookName: "redBook2"},
      {bookName: "redBook3"},
      {bookName: "blueBook1"},
      {bookName: "blueBook2"},
      {bookName: "blackBook1"},
      {bookName: "blackBook1"},
    ]

    const booksObs: Observable<Book[]> = of(books)
      .pipe(delay(2000))

    const getBooks = (query: string): Observable<any> => {
      return booksObs
        .pipe(map((books: Book[]) => books.filter((book: Book) => book.bookName.includes(query))))
        .pipe(map((filteredBooks: Book[]) => ({query: query, books: filteredBooks})))
    }

    // 1. We open the 'queryObs' Stream that reacts to the typing inside 'searchInput'
    // 2. After debounceTime and check distinctUntilChanged() - the current 'queryObs' is done
    // 3. ... it allows to switch to the 'getBooks' inner Observable
    // 4. 'getBooks' gets the books but if during this, the User is typing something, the 'keyUp' Observable is run again
    // .. and when it is done then it stops current 'getBooks' Observable and run the next one
    const queryObs: Observable<any> = fromEvent<any>(this.searchInput.nativeElement, 'keyup')
      .pipe(map((event) => event.target.value))
      .pipe(debounceTime(400))
      .pipe(distinctUntilChanged())
      .pipe(switchMap((query) => getBooks(query)))

    // thanks to switchMap we're always getting the latest query for the Books
    queryObs.subscribe((result) => console.log('result: ', result))
  }

}
