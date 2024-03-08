import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {switchMap, map, catchError, exhaustMap, mergeMap, tap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';
import {
  getSnippetCategoriesFailure,
  getSnippetCategoriesStart,
  getSnippetCategoriesSuccess
} from "./snippets-categories.actions";
import {UsersApiService} from "../../components/users/users-api.service";
import {SnippetsCategory} from "./snippets-categories.state";

@Injectable()
export class SnippetsCategoriesEffects {

  getSnippetsCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSnippetCategoriesStart),
      mergeMap((action) =>
        this.usersApiService.getAllSnippetsCategoriesFromUser(action.userId)
          .pipe(
            map((snippetCategories: SnippetsCategory[]) => getSnippetCategoriesSuccess(snippetCategories)),
            tap((r) => console.log('EFFECTS: ', r)),
            catchError((error) => of(getSnippetCategoriesFailure({ error })))
          )
      )
    )
  );

  // it is not necessary to create effects for this because we do not make any request to the backend
  // addSnippetsCategoriesLocal$ = createEffect(() => {})

  constructor(private actions$: Actions, private usersApiService: UsersApiService) {
  }
}
