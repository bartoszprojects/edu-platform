import {createReducer, on} from "@ngrx/store";
import * as actions from "./snippets-categories.actions";
import {initialSnippetsCategoryState, SnippetsCategoryState} from "./snippets-categories.state";
import {UsersState} from "../users/user.state";
import {
  addBulkSnippetsBackendSuccess,
  addSnippetCategoryLocalStart,
  addSnippetCategoryLocalSuccess
} from "./snippets-categories.actions";


export const snippetsCategoriesReducers = createReducer(
  initialSnippetsCategoryState,

  // it is not necessary to keep reducer for this action
  // on(actions.getSnippetCategoriesStart, (state: SnippetsCategoryState, { userId }): SnippetsCategoryState => ({
  //   ...state,
  //   userId: userId,
  //   isLoading: true
  // })),

  on(actions.getSnippetCategoriesSuccess, (state: SnippetsCategoryState, { snippet_categories }): SnippetsCategoryState => ({
    ...state,
    snippet_categories: [...snippet_categories],
    isLoading: false
  })),

  on(actions.getSnippetCategoriesFailure, (state: SnippetsCategoryState, { error }): SnippetsCategoryState => ({
    ...state,
    isLoading: false,
    error: error
  })),

  // on(actions.addSnippetCategoryLocalStart, (state: SnippetsCategoryState): SnippetsCategoryState => ({
  //   ...state,
  //   isLoading: true
  // })),
  //

  on(actions.addSnippetCategoryLocalSuccess, (state: SnippetsCategoryState, { snippet_category }): SnippetsCategoryState => ({
      ...state,
      isLoading: false,
    snippet_categories: [...state.snippet_categories, snippet_category]
    })),


  // on(actions.addBulkSnippetsBackendSuccess, (state: SnippetsCategoryState, { snippet_categories }): SnippetsCategoryState => ({
  //   ...state,
  //   isLoading: false,
  //   snippet_categories: [...state.snippet_categories, ...snippet_categories]
  // })),

)
