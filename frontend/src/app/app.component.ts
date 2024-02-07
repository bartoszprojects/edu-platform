import {Component, OnInit} from '@angular/core';
import {GlobalService} from "./services/global.service";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {
  decrementNumber,
  incrementNumber,
  resetNumber,
  setConstNumb,
  setYourNumber
} from "./store/core.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  count$: Observable<number>

  inputValue: number = 0;


  constructor(private store:  Store<{ count: number }>,
              private globalService: GlobalService) {
    this.count$ = store.select('count');
  }

  ngOnInit() {
  }

  incrementNumber() {
    this.store.dispatch(incrementNumber())
  }
  decrementNumber() {
    this.store.dispatch(decrementNumber())
  }

  resetNumber() {
    this.store.dispatch(resetNumber())
  }

  setConstNumb() {
    this.store.dispatch(setConstNumb())
  }

  setYourNumber() {
    this.store.dispatch(setYourNumber(this.inputValue))
  }

  getSnippets() {
    this.globalService.getSnippets().subscribe((res) => console.log(res))
  }
}
