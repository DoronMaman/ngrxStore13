import {
  ActionReducerMap,
  MetaReducer,
  Action,
  on,
  createReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import * as UsersActions from '../action/users.actions';
import { StaticReflector } from '@angular/compiler';

export interface UserState {
  users: UserData;

  // userData:any;
}
export interface UserData{
  data: User[];
  type:string;

}

const initialUserState: UserState  = {
  users: {
    data:[],
    type:''
  },
};

export interface AppState {
  users: UserState;
}

export const userdReducer = createReducer(
  initialUserState,
  //   on(UsersActions.LoadUsersSuccess, (state, action) => {
  //     console.log("users",action)
  //     return state;
  // })

  // on(UsersActions.LoadUsersSuccess, (state, users) => ({
  //   users: users.data,
  // })),

  on(UsersActions.LoadUsersSuccess, (state, usersData) => ({
    users: usersData,
  })),
//   on(UsersActions.AddUsersSuccess, (state, action) => ({
// ...state,
// users:state.users.concat(action.data)
//   }))

);

// export function userReducer(state: UserState = initialWeatherState, action: WeatherAction): UserState {
//   switch (action.type) {
//     case WeatherActionTypes.LoadWeather:
//       return {
//         weatherData: action.payload.weatherData
//       };

//     default:
//       return state;
//   }
// }

export const reducers: ActionReducerMap<AppState> = {
  users: userdReducer,
};

// export const selectUser = (state: AppState) => state.weather.weatherData;

// export const selectError = (state: AppState) => state.location.error;

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? []
  : [];
