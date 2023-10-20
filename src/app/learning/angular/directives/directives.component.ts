import {Component, OnInit} from '@angular/core';
import {AngularService} from "../helpers/services/angular.service";
import {myInterface1} from "../helpers/interfaces/interfaces";
import {
  BehaviorSubject,
  map,
  Observable,
  Subject,
  switchMap,
} from "rxjs";

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.sass']
})
export class DirectivesComponent implements OnInit {
  items$: Observable<myInterface1[]>;
  subject: Subject<any> = new BehaviorSubject<any>(1);
  stream$: Observable<myInterface1[]>;

  constructor(private angularService: AngularService) {
    this.items$ = this.angularService.getData()

    this.stream$ = this.subject
      .pipe(switchMap((index) =>
        this.items$.pipe(
          map((items: myInterface1[]) =>
            items.slice((index - 1) * 10, index * 10))
        )
      )
    );
  }

  ngOnInit() {
  }

  handleData($event: number) {
    console.log('data from the directive: ', $event)
    this.subject.next($event)
  }

}
