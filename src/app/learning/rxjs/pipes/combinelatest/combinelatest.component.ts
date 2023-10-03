import {Component, OnInit} from '@angular/core';
import {combineLatest, interval, take} from "rxjs";

@Component({
  selector: 'app-combinelatest',
  templateUrl: './combinelatest.component.html',
  styleUrls: ['./combinelatest.component.sass']
})
export class CombinelatestComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

    this.basicsCombineLatest0();

  }

  basicsCombineLatest0(): void {

    const myObs1 = interval(5000).pipe(take(1))
    const myObs2 = interval(1000).pipe(take(10))
    const myObs3 = interval(500).pipe(take(10))

    const combined1 = combineLatest([myObs1, myObs2, myObs3])

    combined1.subscribe((res) => console.log('combined1: ', res))

  }

}
