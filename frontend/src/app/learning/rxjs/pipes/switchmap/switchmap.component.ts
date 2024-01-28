import {Component, OnInit} from '@angular/core';
import {fromEvent, interval, mergeMap, Subject, switchMap, take, tap} from "rxjs";


interface SquareColumn {
  column1: string[]
}

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.sass']
})
export class SwitchmapComponent implements OnInit {
  myObj1: any = {};
  squares: any[] = []
  subSquares: any[] = []
  columnSubject: Subject<any> = new Subject()
  index: number = 0
  newSquaresColumnFunc: () => any = () => {};
  constructor() {

  }

  ngOnInit() {
    this.rxjsSwitchMapBasics1();
  }

  rxjsSwitchMapBasics0(): void {
    // ------------------------------------------------------------

    const clickStream$ = fromEvent(document, 'click')
    const timeStream$ = interval(500).pipe(take(10))

    const myObs1 = clickStream$.pipe(switchMap((e) => timeStream$))

    myObs1.subscribe((res) => console.log('rxjsSwitchMapBasics0: ', res))

    // ------------------------------------------------------------

  }

  rxjsSwitchMapBasics1(): void {


  }
}
