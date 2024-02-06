import { createAction } from '@ngrx/store';
import {User} from "./core.reducers";

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

export const GET_USERS = "[CORE] GET_USERS";
export const getUsers = createAction(
  GET_USERS,
  (users: User[]) => ({ users })
);


export const ADD_USER = "[CORE] ADD_USER";
export const addUser = createAction(
  ADD_USER,
  (user: User) => ({ user })
);

export const REMOVE_USER = "[CORE] REMOVE_USER";
export const removeUser = createAction(
  REMOVE_USER,
  (userId: string | number) => ({ userId })
);
