
export interface SnippetsCategory {
  id?: string | number
  snippet_category: string;
  description?: string;
}

export interface SnippetsCategoryState {
  isLoading?: boolean;
  snippet_categories: SnippetsCategory[];
  error?: Error | null;
  amount?: number,
  userId?: number | string
}

export const initialSnippetsCategoryState: SnippetsCategoryState = {
  isLoading: false,
  snippet_categories: [],
  error: null,
  amount: 0,
  userId: 0
}
