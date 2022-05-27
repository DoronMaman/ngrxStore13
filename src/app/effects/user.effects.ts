import { UsersService } from './../users.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { AddUsers, AddUsersSuccess, loadUsers, LoadUsersSuccess } from '../action/users.actions';
// import { LoadUsers, LoadUsersSuccess } from '../action/users.actions';


@Injectable()
export class UserEffects {


  // loadUsers$ = createEffect(() => this.actions$.pipe(
  //   ofType(loadUsers),
  //   mergeMap(users => this.usersService.getConfig()
  //     .pipe(
  //       map(users => (LoadUsersSuccess(users))),
  //       catchError(() => EMPTY)
  //     ))
  //   )
  // );
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
      switchMap(() => {
        return this.usersService.getConfig().pipe(
          map((data: any) => {
              return (LoadUsersSuccess({data}))
          }),
          // catchError(error => {
          //   return observableOf(bookActions.loadFailureAction({ error }))
          // })
        )
      })
  )
  )

  addUsers$ = createEffect(() => this.actions$.pipe(
    ofType(AddUsers),
      switchMap(action => {
        return this.usersService.addUser().pipe(
          map((data: any) => {
            console.log('user',data);
              return (AddUsersSuccess({data}))
          }),
          // catchError(error => {
          //   return observableOf(bookActions.loadFailureAction({ error }))
          // })
        )
      })
  )
  )




  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {
    console.log("effects");

  }
}
