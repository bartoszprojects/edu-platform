import {createAction} from "@ngrx/store";
import {SnippetsCategory} from "./snippets-categories.state";
import {User} from "../users/user.state";

// GET SNIPPETS ACTIONS
export const GET_SNIPPET_CATEGORIES_START = "[SNIPPET_CATEGORIES] GET_SNIPPET_CATEGORIES_START";
export const getSnippetCategoriesStart = createAction(
  GET_SNIPPET_CATEGORIES_START,
  (userId: number | string ): {userId: number | string} => ({ userId }));

export const GET_SNIPPET_CATEGORIES_SUCCESS = "[SNIPPET_CATEGORIES] GET_SNIPPET_CATEGORIES_SUCCESS";
export const getSnippetCategoriesSuccess = createAction(
  GET_SNIPPET_CATEGORIES_SUCCESS,
  (snippet_categories: SnippetsCategory[]) => ({ snippet_categories })
);

export const GET_SNIPPET_CATEGORIES_FAILURE = "[SNIPPET_CATEGORIES] GET_SNIPPET_CATEGORIES_FAILURE";
export const getSnippetCategoriesFailure = createAction(
  GET_SNIPPET_CATEGORIES_FAILURE,
  (error: any) => ({ error })
);

// ADD SINGLE SNIPPET - LOCAL



export const ADD_SNIPPET_CATEGORY_LOCAL_START = "[SNIPPET_CATEGORIES] ADD_SNIPPET_CATEGORY_LOCAL_START";
export const addSnippetCategoryLocalStart = createAction(
  ADD_SNIPPET_CATEGORY_LOCAL_START);

export const ADD_SNIPPET_CATEGORY_LOCAL_SUCCESS = "[SNIPPET_CATEGORIES] ADD_SNIPPET_CATEGORY_LOCAL_SUCCESS";
export const addSnippetCategoryLocalSuccess = createAction(
  ADD_SNIPPET_CATEGORY_LOCAL_SUCCESS,
  (snippet_category: SnippetsCategory) => ({ snippet_category }));

export const ADD_SNIPPET_CATEGORY_LOCAL_FAILURE = "[SNIPPET_CATEGORIES] ADD_SNIPPET_CATEGORY_LOCAL_FAILURE";
export const addSnippetCategoryLocalFailure = createAction(
  ADD_SNIPPET_CATEGORY_LOCAL_FAILURE,
  (error: any) => ({ error }));


