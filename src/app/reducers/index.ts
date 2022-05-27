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

// export interface UserState {
//   users: UserData;

//   // userData:any;
// }
export interface UserData {
  data: User[];
}

const initialUserState: UserData = {

    data:[{
      id:'1',
      name:'didi',
      gender:'male',
      email:'d@gmail.com'
    }]

};

export interface AppState {
  users: UserData;
}

export const userdReducer = createReducer(
  initialUserState,


  on(UsersActions.LoadUsersSuccess, (state, action) => {
    console.log(state);
    return action;
  }),

  on(UsersActions.AddUsersSuccess, (state, action) => {
    console.log("ddd",state);

    return {
      ...state,
      data:state.data.concat(action.data)
    };
  }),



);



export const reducers: ActionReducerMap<AppState> = {
  users: userdReducer,
};

export const selectUsers = (state: AppState) => state.users.data;

export const selectUsersShow = createSelector(
  selectUsers,
  (state: User[]) => state
);
export const selectUserById = (user_id:string) => createSelector(
  selectUsers,
  users => users.filter((user:any) => user._id == user_id)
);

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? []
  : [];
