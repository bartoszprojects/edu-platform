import {createFeatureSelector, createSelector} from "@ngrx/store";
import {User} from "../users/user.state";
import {SnippetsCategory} from "./snippets-categories.state";
import {selectUsersState} from "../users/user.selectors";

export const selectSnippetCategoriesState =
  createFeatureSelector<{ snippet_categories: SnippetsCategory[], amount: number }>('snippet_categories');

export const selectSnippetCategories = createSelector(
  selectSnippetCategoriesState,
  (state) => state.snippet_categories
);
