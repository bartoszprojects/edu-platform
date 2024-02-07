import {createReducer, on} from "@ngrx/store";
import * as actions from "./user.actions";
import {initialUsersState, UsersState} from "./user.state";
import {getUsersStart, getUsersSuccess} from "./user.actions";


export const usersReducer = createReducer(
  initialUsersState,

  on(actions.getUsersStart, (state: UsersState): UsersState => ({
    ...state,
    isLoading: true
  })),

  on(actions.getUsersSuccess, (state: UsersState, { users }): UsersState => ({
    ...state,
    isLoading: false,
    users: [...users],
    amount: users.length
  })),

  on(actions.getUsersFailure, (state: UsersState, { error }): UsersState => ({
    ...state,
    isLoading: false,
    error: error
  })),

  on(actions.addUserStart, (state: UsersState): UsersState => ({
    ...state,
    isLoading: true
  })),
  on(actions.addUserSuccess, (state: UsersState, { user }): UsersState => ({
    ...state,
    isLoading: false,
    users: [...state.users, user]
  })),



  on(actions.removeUser, (state: UsersState, { userId }): UsersState => ({
    ...state,
    users: state.users.filter(user => user.id != userId)
  })),

  on(actions.removeUsers, (state: UsersState): UsersState => ({
    users: []
  })),
)
