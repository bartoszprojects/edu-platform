import {Component, OnInit} from '@angular/core';
import {Observable, Subject, Subscription, zip} from "rxjs";

type reusableFuncType = () => void

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.sass']
})
export class ZipComponent implements OnInit {
  myFunc1: reusableFuncType = () => {};
  myFunc2: reusableFuncType = () => {};
  myFunc3: reusableFuncType = () => {};

  constructor() {
  }

  ngOnInit() {
    this.basicsZip0()
  }

  basicsZip0(): void {
    const mySubj1 = new Subject()
    const mySubj2 = new Subject()
    const mySubj3 = new Subject()

    this.myFunc1 = () => mySubj1.next('muSubj1')
    this.myFunc2 = () => mySubj2.next('muSubj2')
    this.myFunc3 = () => mySubj3.next('muSubj3')

    const zipObs1= zip(mySubj1, mySubj2, mySubj3).subscribe((res) => console.log(res))

  }

}
