import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import * as UserActions from '../actions/user.actions';
import { LoginService } from '../../services/login/login.service';
import { Injectable } from '@angular/core';
import { RegisterService } from 'src/app/services/register/register.service';
import { AuthErrorLogin } from 'src/app/Interfaces/Errors/Auth/Auth.error';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly loginService: LoginService,
    private readonly registerService: RegisterService
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loginInit),
      exhaustMap(({ email, password }) => {
        return this.loginService.login({ email, password }).pipe(
          map((infoLogin) => {
            localStorage.setItem('jwt', infoLogin.jwt);

            return UserActions.loginInitSuccess({ infoLogin });
          }),
          catchError((error: AuthErrorLogin) => {
            return of(UserActions.loginInitFailure({ error: error }));
          })
        );
      })
    );
  });

  checkIfUserIsExist$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.checkRegisterInit),
      exhaustMap((action) => {
        return this.registerService.isRegistered(action.id).pipe(
          map((success) => {
            return UserActions.checkRegisterSuccess({ success });
          }),
          catchError((error) => of(UserActions.checkRegisterFailure({ error })))
        );
      })
    );
  });
  //create end poing for check jwt
  loginByJwt = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loginByJwt),
      exhaustMap((action) => {
        return this.loginService.loginByJwt(action.jwt).pipe(
          map((infoLogin) => {
            return UserActions.loginInitSuccess({ infoLogin });
          })
        );
      })
    );
  });

  registerUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.registerUserInit),
      exhaustMap((action) => {
        return this.registerService.fullRegister(action.data).pipe(
          map((infoLogin) => {
            localStorage.setItem('jwt', infoLogin.jwt);
            return UserActions.registerUserSuccess({ infoLogin });
          }),
          catchError((error) => of(UserActions.registerUserFailure({ error })))
        );
      })
    );
  });
}
