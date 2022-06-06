// import { UserData } from './index';
import {
  ActionReducerMap,
  MetaReducer,
  Action,
  on,
  createReducer,
  createSelector,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import * as UsersActions from '../action/users.actions';
import { StaticReflector } from '@angular/compiler';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';



export interface State extends EntityState<User> {
  // additional entities state properties
  selectedUserId: string | null;
}
export const adapter: EntityAdapter<User> = createEntityAdapter<User>();


export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedUserId: null,
});

export interface AppState {
  users: State;
}

export const userdReducer = createReducer(
  initialState,
  on(UsersActions.LoadUsersSuccess, (state, { data }) => {
    return adapter.addMany(data, { ...state, selectedUserId: null });
  }),
  on(UsersActions.AddUsersSuccess, (state, { data }) => {
    return adapter.addOne(data, state)
  }),
  // on(UsersActions.LoadUsersSuccess, (state, action) => {
  //   console.log(state);
  //   return action;
  // }),

  // on(UsersActions.AddUsersSuccess, (state, action) => {
  //   console.log("ddd",state);

  //   return {
  //     ...state,
  //     data:state.data.concat(action.data)
  //   };
  // }),



);

export const getSelectedUserId = (state: State) => state.selectedUserId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of user ids
export const selectUserIds = selectIds;

// select the dictionary of user entities
export const selectUserEntities = selectEntities;

// select the array of users
export const selectAllUsers = selectAll;

// select the total user count
export const selectUserTotal = selectTotal;

export const reducers: ActionReducerMap<AppState> = {
  users: userdReducer,
};

export const selectUsers = (state: AppState) => state.users;

export const selectAllUserss = createSelector(
  selectUsers,
  selectAllUsers
);

export const selectCurrentUserId = createSelector(
  selectUsers,
  getSelectedUserId
);
export const selectUserEntitiess = createSelector(
  selectUsers,
  selectUserEntities
);
export const selectCurrentUser = createSelector(
  selectUserEntitiess,
  selectCurrentUserId,
  (userEntities, userId) => userId && userEntities[userId]
);
// export const selectUserById = (user_id:string) => createSelector(
//   selectUsers,
//   users => users.filter((user:any) => user._id == user_id)
// );

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? []
  : [];
