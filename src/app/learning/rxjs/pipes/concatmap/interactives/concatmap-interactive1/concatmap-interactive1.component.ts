import {Component, OnInit} from '@angular/core';
import {exhaustMap, interval, Observable, Subject, Subscription, take} from "rxjs";

interface myInterface1 { [key: string]: number[] }

@Component({
  selector: 'app-concatmap-interactive1',
  templateUrl: './concatmap-interactive1.component.html',
  styleUrls: ['./concatmap-interactive1.component.sass']
})
export class ConcatmapInteractive1Component implements OnInit {
  myFunc1 = () => {};
  index: number = 0;
  myObj1: myInterface1 = {};
  myStream1: Subscription | undefined

  ngOnInit() {

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

}
