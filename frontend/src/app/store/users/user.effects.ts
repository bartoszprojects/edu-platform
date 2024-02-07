import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {addUserStart, addUserSuccess, getUsersFailure, getUsersStart, getUsersSuccess} from './user.actions';
import {switchMap, map, catchError, exhaustMap, mergeMap, tap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';
import {UsersApiService} from "../../components/users/users-api.service";
import {User} from "./user.state";

@Injectable()
export class UserEffects {

  getUsers$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(getUsersStart),
        mergeMap(() => this.usersApiService.getUsers()
          .pipe(
            map((users: User[]) => getUsersSuccess(users)),
            catchError((error) => of(getUsersFailure({error})))
          )
        ))
  );

  addUser = createEffect(() =>
    this.actions$
      .pipe(
        ofType(addUserStart),
        mergeMap(() => this.usersApiService.addUser()
          .pipe(
            map((user: User) => addUserSuccess(user)),
            catchError((error) => of(getUsersFailure({error})))
          )
        ))
  );

  constructor(private actions$: Actions, private usersApiService: UsersApiService) {
  }
}
