import {Component, OnInit} from '@angular/core';
import {concatMap, exhaustMap, interval, mergeMap, Observable, Subject, Subscription, switchMap, take} from "rxjs";
import {KeyValuePipe, NgForOf} from "@angular/common";
import {map, tap} from "rxjs/operators";
import {FormsModule} from "@angular/forms";

interface dataFlowObjectInterface {
  [key: string]: number[]
}


@Component({
  selector: 'app-pipes-compare',
  standalone: true,
  imports: [
    KeyValuePipe,
    NgForOf,
    FormsModule
  ],
  templateUrl: './pipes-compare.component.html',
  styleUrl: './pipes-compare.component.sass'
})
export class PipesCompareComponent implements OnInit {
  triggerParentObservable = () => {
  };
  checkOperatorType = (value: Event) => {
  };

  index: number = 0;
  dataFlowObject: dataFlowObjectInterface = {};

  options: string[] = ['switchMap', 'mergeMap', 'concatMap', 'exhaustMap'];
  parentObservable: Subject<string> = new Subject()
  innerObservable: Observable<number> = interval(200).pipe(take(10))
  subscription!: Subscription;

  constructor() {

  }

  ngOnInit() {
    this.rxjsComparePipes0();
  }

  unsubscribePrevious() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  rxjsComparePipes0(): void {
    this.checkOperatorType = (event: Event): void => {
      const selectedValue: string = (event.target as HTMLInputElement).value;
      this.subscription = selectOperator(selectedValue).subscribe()
    }

    const callBack = (): ((valueFromSubject: string) => Observable<{ column: string, value: number }>) => {
      return (valueFromSubject: string) => this.innerObservable
        .pipe(map((valueFromInterval: number): {column: string, value: number} =>
          ({column: valueFromSubject, value: valueFromInterval})))
        .pipe(tap(
          (res: {column: string, value: number}) =>  this.dataFlowObject[res.column].push(res.value)))
    }


    this.triggerParentObservable = () => {
      this.index++
      let columnName: string = `Observable${this.index}`
      this.dataFlowObject[columnName] = []
      return this.parentObservable.next(columnName)
    }

    const selectOperator = (mapType: string): Observable<{column: string, value: number}> | never => {
      this.unsubscribePrevious()
      console.log('mapType: ', mapType)
      switch (mapType) {
        case "switchMap":
          return this.parentObservable.pipe(switchMap(callBack()))
        case "mergeMap":
          return this.parentObservable.pipe(mergeMap(callBack()))
        case "exhaustMap":
          return this.parentObservable.pipe(exhaustMap(callBack()))
        case "concatMap":
          return this.parentObservable.pipe(concatMap(callBack()))
        default:
          throw new Error("Invalid Map Operator")
      }
    }
  }
}
