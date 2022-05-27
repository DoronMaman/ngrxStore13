import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';

export const loadUsers = createAction(
  '[Users] USER LOAD USERS',

);

export const LoadUsersSuccess = createAction(
  '[Users] USER LOAD USERS Success',
  props<{ data: User[] }>()
);

export const LoadUsersFailure = createAction(
  '[Users] USER LOAD USERS Failure',
  props<{ error: any }>()
);

export const AddUsers = createAction(
  '[Users] USER Add USERS',
);

export const AddUsersSuccess = createAction(
  '[Users] USER ADD USERS Success',
  props<{ data: User }>()
);

export const AddUsersFailure = createAction(
  '[Users] USER LOAD USERS Failure',
  props<{ error: any }>()
);

