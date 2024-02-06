import {Component, OnInit} from '@angular/core';
import {GlobalService} from "./services/global.service";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {
  addUser,
  decrementNumber,
  incrementNumber,
  resetNumber,
  setConstNumb,
  setYourNumber
} from "./store/core.actions";
import {User} from "./store/core.reducers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  count$: Observable<number>
  users$: Observable<User>

  inputValue: number = 0;


  constructor(private store:  Store<{ count: number, users: User }>) {
    this.count$ = store.select('count');
    this.users$ = store.select('users')
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

  addUser() {
    const exampleUser = {
      id: 2,
      name: "name1",
      surname: "surname1",
      age: 25,
      city: "city1"
    }
    this.store.dispatch(addUser(exampleUser))
  }
}
