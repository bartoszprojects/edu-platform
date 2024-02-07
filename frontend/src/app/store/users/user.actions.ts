import {createAction} from "@ngrx/store";
import {User} from "./user.state";

export const GET_USERS_START = "[USERS] GET_USERS_START";
export const getUsersStart = createAction(GET_USERS_START);

export const GET_USERS_SUCCESS = "[USERS] GET_USERS_SUCCESS";
export const getUsersSuccess = createAction(
  GET_USERS_SUCCESS,
  (users: User[]) => ({ users })
);
export const GET_USERS_FAILURE = "[USERS] GET_USERS_FAILURE";

export const getUsersFailure = createAction(
  GET_USERS_FAILURE,
  (error: any) => ({ error })
);



export const ADD_USER_START = "[USERS] ADD_USER_START";
export const addUserStart = createAction(
  ADD_USER_START);
export const ADD_USER_SUCCESS = "[USERS] ADD_USER_SUCCESS";
export const addUserSuccess = createAction(
  ADD_USER_SUCCESS,
  (user: User) => ({ user })
);
export const ADD_USER_FAILURE = "[USERS] ADD_USER_FAILURE";
export const addUserFailure = createAction(
  ADD_USER_FAILURE,
  (error: any) => ({ error })
);




export const REMOVE_USER = "[CORE] REMOVE_USER";
export const removeUser = createAction(
  REMOVE_USER,
  (userId: string | number) => ({ userId })
);


export const REMOVE_USERS = "[CORE] REMOVE_USERS";
export const removeUsers = createAction(
  REMOVE_USERS
);
