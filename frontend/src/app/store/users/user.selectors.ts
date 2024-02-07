import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from './user.state';

// Define a feature selector to select the users slice of the store state
export const selectUsersState = createFeatureSelector<{ users: User[], amount: number }>('users');

// Define a selector function to extract the users array from the users slice
export const selectUsers = createSelector(
  selectUsersState,
  (state) => state.users
);

export const selectUserWholeState = createSelector(
  selectUsersState,
  (state) => state
);
