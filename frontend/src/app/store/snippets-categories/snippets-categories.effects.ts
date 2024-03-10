import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {switchMap, map, catchError, exhaustMap, mergeMap, tap} from 'rxjs/operators';
import {EMPTY, Observable, of, take} from 'rxjs';
import {
  addBulkSnippetsBackend, addBulkSnippetsBackendFailure, addBulkSnippetsBackendSuccess,
  getSnippetCategoriesFailure,
  getSnippetCategoriesStart,
  getSnippetCategoriesSuccess
} from "./snippets-categories.actions";
import {UsersApiService} from "../../components/users/users-api.service";
import {SnippetsCategory} from "./snippets-categories.state";
import {selectSnippetCategories, selectSnippetCategories2} from "./snippets-categories.selectors";
import {getSnippetCategory} from "../../shared/interfaces/get.snippets.categories.interface";
import {Store} from "@ngrx/store";

@Injectable()
export class SnippetsCategoriesEffects {
  snippetCategories$: Observable<getSnippetCategory[]>;

  constructor(private actions$: Actions, private usersApiService: UsersApiService, private store: Store) {
    this.snippetCategories$ = this.store.select(selectSnippetCategories2).pipe(take(1))
  }
  getSnippetsCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSnippetCategoriesStart),
      mergeMap((action) =>
        this.usersApiService.getAllSnippetsCategoriesFromUser(action.userId)
          .pipe(
            map((snippetCategories: SnippetsCategory[]) => getSnippetCategoriesSuccess(snippetCategories)),
            catchError((error) => of(getSnippetCategoriesFailure({ error })))
          )
      )
    )
  );

  addSnippetsCategoriesBackend$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addBulkSnippetsBackend),
      switchMap((action) => {
        console.log('effects userId: ', action.userId)
        return this.snippetCategories$.pipe(
          map((list: getSnippetCategory[]) => list.filter((obj) => !obj.id).map((obj) => ({
              ...obj,
              user: action.userId
            }))
          ),
          switchMap((toBackend) => this.usersApiService.addSnippetsCategoriesBackend(toBackend).pipe(
              map(() => addBulkSnippetsBackendSuccess()), // Dispatch success action
              catchError((error) => of(addBulkSnippetsBackendFailure({error})))
            )
          )
        );
      }
      )
    )
  );

  // it is not necessary to create effects for this because we do not make any request to the backend
  // addSnippetsCategoriesLocal$ = createEffect(() => {})


}
