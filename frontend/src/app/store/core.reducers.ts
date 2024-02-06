import {createReducer, on} from "@ngrx/store";
import * as actions from "./core.actions"
import {addUser} from "./core.actions";

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

export interface User {
  id: string | number
  name: string;
  age: number;
  city: string;
}

export interface UsersState {
  users: User[]
}

export const initialUsersState: UsersState = {
  users: []
}

export const usersReducer = createReducer(
  initialUsersState,
  on(actions.getUsers, (state: UsersState, { users }): UsersState => ({
    users: users
  })),
  on(actions.addUser, (state: UsersState, { user }): UsersState => ({
    users: [...state.users, user]
  })),
  on(actions.removeUser, (state: UsersState, { userId }): UsersState => ({
    ...state,
    users: state.users.filter(user => user.id != userId)
  }))
)
