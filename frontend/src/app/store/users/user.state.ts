export interface User {
  id: string | number
  name: string;
}

export interface UsersState {
  isLoading?: boolean;
  users: User[];
  error?: Error | null;
  amount?: number
}

export const initialUsersState: UsersState = {
  isLoading: false,
  users: [],
  error: null,
  amount: 0
}
