import {Component, OnInit} from '@angular/core';
import {from, map, Observable, of, tap} from "rxjs";
import {GlobalService} from "../../../../services/global.service";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {
  snippets$: Observable<any>;
  panelOpenState = false;

  constructor(private globalService: GlobalService) {
    this.snippets$ = this.globalService.getCodeSnippet('rxjs', 'pipes/map')

  }

  ngOnInit() {
    this.rxjsMapBasics1()
  }

  rxjsMapBasics1(): void {
    // Map
    // I am using 'map' operator when I want to make any operation on data flowing through the Stream before subscribing

    // ------------------------------------------------------------

    const myObs1: Observable<number> = from([1,2,3,4,5,6])
    myObs1
      .pipe(map((element) => element * 10))
      .subscribe((result) => console.log(result))

    // ------------------------------------------------------------

    interface myInterface { name: string, age: number }
    const myObj1: myInterface[] = [ { name: 'name1', age: 20 }, { name: 'name2', age: 30 } ]

    const myObs2: Observable<myInterface> = from(myObj1)

    // we can map each element from the Stream and add, change object scheme inside map operator
    myObs2.pipe(map((element: myInterface): myInterface & { extra: string } => {
      return { ...element, extra: 'extraInfo'}
    }))
      .subscribe((result) => console.log(result))

  }

}
