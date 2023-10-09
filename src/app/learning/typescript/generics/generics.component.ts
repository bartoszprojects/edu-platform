import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {TypescriptService} from "../helpers/services/typescriot.service";
import {InterfaceGenerics1} from "../helpers/interfaces/interfaces";

type myUnion = 'myFunc1' | 'myFunc2';

type MappedTypeFromUnion = {
  [Key in myUnion]?: number[];
};

type typeForSubject<T> = T extends myUnion ? myUnion : never

@Component({
  selector: 'app-generics',
  templateUrl: './generics.component.html',
  styleUrls: ['./generics.component.sass']
})
export class GenericsComponent implements OnInit {
  myFunc4: any;


  constructor(private typescriptService: TypescriptService) {
  }

  ngOnInit() {
    this.genericsMixedTogether()
  }

  genericsMixedTogether(): void {
    // --------------------------------------------------
    // Here I want to make mixed example with Subject, Generic Types and array.reduce
    // - for example: buttons to load new data to table, but table is categorizing all new and old data by "position"
    // + make "related knowledge" buttons - for example if the example is touching generics then make reference button to it
    // but firstly: learn Observable, Subject, Behaviour Subject, ReplaySubject !!

  }

}
