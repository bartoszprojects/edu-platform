import { createAction } from '@ngrx/store';

export const INCREMENT = "[CORE] INCREMENT";
export const DECREMENT = "[CORE] DECREMENT";
export const RESET = "[CORE] RESET";
export const SET_CONT_NUMBER = "[CORE] SET_CONT_NUMBER";
export const SET_YOUR_NUMBER = "[CORE] SET_YOUR_NUMBER";

export const incrementNumber = createAction(INCREMENT);
export const decrementNumber = createAction(DECREMENT);
export const resetNumber = createAction(RESET);
export const setConstNumb = createAction(SET_CONT_NUMBER);
export const setYourNumber = createAction(
  SET_YOUR_NUMBER,
  (yourNumber: number) => ({ yourNumber })
);
