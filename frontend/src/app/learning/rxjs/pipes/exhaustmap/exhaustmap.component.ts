import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {delay, exhaustMap, fromEvent, interval, map, mergeMap, Observable, of, Subject, take, tap} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

interface LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-exhaustmap',
  templateUrl: './exhaustmap.component.html',
  styleUrls: ['./exhaustmap.component.sass']
})
export class ExhaustmapComponent implements OnInit, AfterViewInit {
  @ViewChild('input1') input1!: ElementRef;
  loginForm: FormGroup;
  tryLogin = () => {}
  tryLoginSubject: Subject<boolean> = new Subject<boolean>()

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.required]],
      password: ['', [Validators.required, Validators.required, Validators.minLength(6)]],
    });

  }

  ngOnInit() {

  }


  ngAfterViewInit() {
    this.basicsExhaustMap0();
    this.rxjsExhaustMapRealExample1()
  }

  basicsExhaustMap0(): void {
  //   exhaustMap:
  //      how it works: - use the exhaustMap when you want to block the next ongoing Streams when the current Stream
  //      is working. While the current Stream is live then the next ongoing Streams are ignored. The next Stream
  //      in the queue will start only when it is triggered after the current one is done
  //      when to use:
  //          … use exhaustMap when you want to ignore new emissions or events while a previous operation is still
  //          ongoing, ensuring that only one operation is active at a time.
  //          real example: … imagine that User want to log in into your application. Using exhaustMap we prevent the
  //          backend from flood of login attempts. If the user click the login button rapidly, it ignores all
  //          the emissions during the first emission was sent to the backend. It helps prevent overloading the
  //          server with redundant requests and improves the overall efficiency of the application.
  //     when not to use :
  //          … in general, avoid exhaustMap when there is requirement to not ignore incoming observables during the
  //          active emission is live
  //          real example: .. imagine the User want to search something using the searchInput. Using this operator,
  //          when the query request was sent to backend but during this the User typed something else, it will be
  //          ignored and User will receive the previous query result. In this case the best approach is to use switchMap.
  //
  //

    // basic example

    // .. we have two Streams: time Stream and keyup event Stream
    const intervalStream: Observable<number> = interval(300).pipe(take(10))

    const keyUpStream: Observable<string> = fromEvent<any>(this.input1.nativeElement, 'keyup')
      .pipe(map(event => event.target.value))
      .pipe(tap(() => console.log('----- Parent Observable triggered -----')))

    // .. we mix the Streams using exhaustMap. Every trigger of 'keyupStream' do something with the second
    // 'intervalStream' inner Observable. In this case it does 'exhaustMap'. It means that every trigger of the first
    // Observable (keyupStream) runs the 'intervalStream' but every next trigger innerObservable will be ignored
    // until the current is finish.
    const finalObs = keyUpStream.pipe(
      exhaustMap((keyUpValue: string) =>
        intervalStream.pipe(
          map((intervalNumb: number) => ({keyUpValue, intervalNumb}))
        )
      )
    ).subscribe(({keyUpValue, intervalNumb}) => {
      console.log(keyUpValue, intervalNumb);
    });

  }

  rxjsExhaustMapRealExample1() {
    const tryLoginObservable$: Observable<string> = of('Login Attempt').
    pipe(delay((Math.floor(Math.random() * (5000 - 100 + 1)) + 100)))

    const finalObservable$: Observable<string> = this.tryLoginSubject
      .pipe(exhaustMap((valueFromSubject: boolean) => tryLoginObservable$))

    finalObservable$.subscribe((res) => console.log(res))
  }




}
