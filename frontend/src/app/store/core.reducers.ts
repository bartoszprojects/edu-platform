import {createReducer, on} from "@ngrx/store";
import * as actions from "./core.actions"

interface CounterInterface {
  counter: number;
}
export const initialState: number = 0;

export const counterReducer = createReducer(
  initialState,
  on(actions.incrementNumber, (state) => state + 1),
  on(actions.decrementNumber, (state) => state - 1),
  on(actions.resetNumber, (state) => 0),
  on(actions.setConstNumb, (state) => 100),
  on(actions.setYourNumber, (state, { yourNumber }) => yourNumber),
);
